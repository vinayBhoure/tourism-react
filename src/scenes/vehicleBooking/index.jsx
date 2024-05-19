import { useEffect } from "react";
import Header from "../../components/Header";
import Vehicle from "./Vehicle";


const VehicleBooking = () => {
	const item = 
		{
			name: "Toyota Corolla",
			capacity: 5,
			rentperday: 50,
			img: "https://www.google.com/imgres?q=toyota%20sera%20car&imgurl=http%3A%2F%2Fgedeecarmuseum.com%2Fwp-content%2Fuploads%2F2015%2F10%2F03.jpg&imgrefurl=http%3A%2F%2Fgedeecarmuseum.com%2Fcars-on-display%2Fjapanese-cars%2Ftoyota-sera%2F&docid=79nr-hlDoZa99M&tbnid=JS22Rs0aCCxXXM&vet=12ahUKEwj0hd_KwpmGAxXvafUHHSnmDAIQM3oECEcQAA..i&w=480&h=332&hcb=2&ved=2ahUKEwj0hd_KwpmGAxXvafUHHSnmDAIQM3oECEcQAA",
			type: "Sedan",
			about: "The Toyota Corolla is a reliable and fuel-efficient sedan, perfect for city driving and long trips.",
		}
		

	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<div className="col-md-9 mt-2">
					<Vehicle vehicle={item} />
				</div>

			</div>
		</div>
	);
};

export default VehicleBooking;
