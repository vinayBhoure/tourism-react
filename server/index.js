const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

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

app.post('/hotels', async (req, res) => {
    try {
        const hotel = await Hotel.create(req.body);

        return res.status(201).json({
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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);

const connectDB = require('./config/connectDB');
connectDB();