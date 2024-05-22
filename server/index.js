const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const auth = require('./middleware/auth');
const generateUniqueId = require('generate-unique-id');

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(cookieParser());
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// HOTEL ROUTES
const Hotel = require('./models/hotel');
app.get('/hotels', async (req, res) => {
    try {
        const result = await Hotel.find();

        return res.status(200).json({
            success: true,
            count: result.length,
            data: result
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
});

app.post('/hotel/add', async (req, res) => {
    try {
        const {hotel_name, city, state, country, star_rating, photo1, photo2, photo3, photo4, overview, rating_average, rentperday, facility} = req.body;
        
        if (!hotel_name || !city || !state || !country || !star_rating || !photo1 || !photo2 || !photo3 || !photo4 || !overview || !rating_average || !rentperday || !facility) {
            return res.status(400).json({
                success: false,
                error: 'Invalid Data',
                message: 'All fields are required'
            });
        }

        const newHotel = new Hotel({
            hotel_name,
            city,
            state,
            country,
            star_rating,
            photo1,
            photo2,
            photo3,
            photo4,
            overview,
            rating_average,
            rentperday,
            facility
        });

        const hotel = await newHotel.save();

        res.status(201).send({
            success: true,
            data: hotel,
            message: 'Hotel added to database'
        });

        return res.status(201).json({
            success: true,
            data: hotel,
            message: 'Hotel added to database'
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
})

app.delete('/hotels/delete/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const hotel = await Hotel.findByIdAndDelete(id);
        if(!hotel){
            return res.status(404).json({
                success: false,
                error: 'Not Found',
                message: 'Hotel does not exist'
            });
        }
        return res.status(200).json({
            success: true,
            message: 'Hotel deleted successfully'
        });
        
        }catch(err){
            return res.status(400).json({
                success: false,
                error: 'Server Error',
                message: err.message
            });
        
        }
})

app.get('/hotel/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);

        if (!hotel) {
            return res.status(404).json({
                success: false,
                error: 'Not Found',
                message: 'Hotel not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: hotel
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
});


// USER ROUTES
const User = require('./models/user');
app.post('/register', async (req, res) => {
    try {
        // get all data from body
        const { name, email, password, role, bookings } = req.body;

        // all data should exist
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                error: 'Invalid Data',
                message: 'All fields are required'
            });
        }
        // check if the user already exists
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: 'Invalid Data',
                message: 'User already exists'
            });
        }
        //encrypt the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role,
        });

        //  save the user to the database
        const user = await newUser.save();

        // generate token for login
        const token = jwt.sign(
            {id: user._id, email: user.email, role: user.role},
            "shhhh",
            {
                expiresIn: '1h'
            }
        )

        user.token = token;
        user.password = undefined;
        //returning response

        res.status(201).json({
            success: true,
            data: user,
            message: 'User added to database'
        });


    } catch (err) {
        return res.status(400).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
})

app.post('/login', async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                error: 'Invalid Data',
                message: 'All fields are required'
            });
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success: false,
                error: 'Invalid Data',
                message: 'User does not exist'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                success: false,
                error: 'Invalid Data',
                message: 'Invalid password'
            });
        }

        const token = jwt.sign({
            id: user._id,
            email: user.email,
            role: user.role
        }, "shhhh", {
            expiresIn: '1h'
        });
        user.token = token;
        user.password = undefined;

        //sending token in cookie
        const options = {
            expires: new Date(
                Date.now() + 2 * 24 * 60 * 60 * 1000
            ),
            httpOnly: true
        }

        res.status(200).cookie('token', token, options).json({
            success: true,
            data: user,
            message: 'User logged in'
        });

    }catch(err){
        return res.status(400).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
});

app.get('/logout', (req, res) => {
    res.cookie('token', '', {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    redirect('/');
    res.send({success: true, message: 'User logged out'});
});

// VEHICLES ROUTES
const Vehicles = require('./models/vehicle');
app.get('/vehicles', async (req, res) => {
    try {
        const result = await Vehicles.find();

        return res.status(200).json({
            success: true,
            count: result.length,
            data: result
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
});

app.post('/vehicle/add',  async (req, res) => {
    try{
     const {name, capacity, rentperhr, img_url, current_bookings, type} = req.body;

     console.log(req.body);
     if(!name || !capacity || !rentperhr || !img_url || !type){
            return res.status(400).json({
                success: false,
                error: 'Invalid Data',
                message: 'All fields are required'
            });
     }

     const existingVehicle = await Vehicles.findOne({name});
        if(existingVehicle){
            return res.status(400).json({
                success: false,
                error: 'Invalid Data',
                message: 'Vehicle already exists'
            });
        }

     const newVehicle = new Vehicles({
            name,
            capacity,
            rentperhr,
            img_url,
            current_bookings,
            type
     });
     const vehicle = await newVehicle.save();

     res.status(200).send({
            success: true,
            data: vehicle,
            message: 'Vehicle added to database'
        }); 

    }catch(err){
        return res.status(400).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
});

app.delete('/vehicles/delete/:id', async (req, res) => {
    try{
    const id = req.params.id;
    const vehicle = await Vehicles.findByIdAndDelete(id);
    if(!vehicle){
        return res.status(404).json({
            success: false,
            error: 'Not Found',
            message: 'Vehicle does not exist'
        });
    }
    return res.status(200).json({
        success: true,
        message: 'Vehicle deleted successfully'
    });

    }catch(err){
        return res.status(400).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    
    }
});


app.get('/vehicle/:id', async (req, res) => {
    try {
        const vehicle = await Vehicles.findById(req.params.id);

        if (!vehicle) {
            return res.status(404).json({
                success: false,
                error: 'Not Found',
                message: 'Vehicle not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: vehicle
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
});

// ATTARCTION ROUTEs
const Attraction = require('./models/attraction');
app.get('/attractions', async (req, res) => {
    try {
        
        const result = await Attraction.find();

        return res.status(200).json({
            success: true,
            count: result.length,
            data: result
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
});

app.post('/attraction/add',  async (req, res) => {
    try{

        if(req.body === ""){
            return res.status(400).json({
                success: false,
                error: 'Invalid Data',
                message: 'All fields are required'
            });
        }

        const newAttraction = new Attraction(req.body);
        const attraction = await newAttraction.save();

        return res.status(200).json({
            success: true,
            data: attraction,
            message: 'Attraction added to database'
        })

    }catch(err){
        return res.status(400).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
});

app.delete('/attractions/delete/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const attraction = await Attraction.findByIdAndDelete(id);
        if(!attraction){
            return res.status(404).json({
                success: false,
                error: 'Not Found',
                message: 'Attraction does not exist'
            });
        }
        return res.status(200).json({
            success: true,
            message: 'Attraction deleted successfully'
        });
        
        }catch(err){
            return res.status(400).json({
                success: false,
                error: 'Server Error',
                message: err.message
            });
        
        }
})

app.get('/attraction/:id', async (req, res) => {
    try {
        const attraction = await Attraction.findById(req.params.id);

        if (!attraction) {
            return res.status(404).json({
                success: false,
                error: 'Not Found',
                message: 'Attraction not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: attraction
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
});


// BOOKING ROUTES
const Booking = require('./models/bookingVehicle');
app.post('/booking/vehicle', async(req, res) => {
    try{

        const {vehicle, vehicle_id, user_id, total_hours, rentperhr, total_amount, status} = req.body;

        const transaction_id = generateUniqueId({
            length: 12,
            useLetters: false
        });

        if(vehicle === "" || vehicle_id === "" || user_id === "" || total_hours === "" || rentperhr === "" || total_amount === "" || status === ""){
            return res.status(400).json({
                success: false,
                error: 'Invalid Data',
                message: 'All fields are required'
            });
        }
        const newBooking = new Booking({
            vehicle,
            vehicle_id,
            user_id,
            total_hours,
            rentperhr,
            total_amount,
            transaction_id: transaction_id,
            status
        });

        const booking = await newBooking.save();
        return res.status(200).json({
            success: true,
            data: booking,
            message: 'Vehicle booked successfully'
        });

    }catch(err){
        return res.status(400).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
        })

const BookingH = require('./models/bookingHotel');
app.post('/booking/hotel', async(req, res) => {
    try{

        const {hotel, user_id, total_days, rentperday, total_amount} = req.body;
        const transaction_id = generateUniqueId({
            length: 12,
            useLetters: false
        });

        if(hotel === "" || user_id === "" || total_days === "" || rentperday === "" || total_amount === ""){
            return res.status(400).json({
                success: false,
                error: 'Invalid Data',
                message: 'All fields are required'
            });
        }
        const newBooking = new BookingH({
            hotel,
            user_id,
            total_days,
            rentperday,
            total_amount,
            transaction_id: transaction_id,
            status: 'booked'
        });

        const booking = await newBooking.save();
        return res.status(200).json({
            success: true,
            data: booking,
            message: 'Hotel booked successfully'
        });

    }catch(err){
        return res.status(400).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);

const connectDB = require('./config/connectDB');
const { redirect } = require('react-router-dom');
connectDB();