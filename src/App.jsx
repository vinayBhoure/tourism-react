import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import AboutUs from "./scenes/aboutUs";
import Attractions from "./scenes/attractions";
import HomePage from "./scenes/homePage";
import Contact from "./scenes/contact";
import Mice from "./scenes/mice";
import Packages from "./scenes/packages";
import VehicleFleet from "./scenes/vehicleFleet";
import Terms from "./scenes/terms";
import Privacy from "./scenes/privacy";
import HotelBooking from "./scenes/hotels";
import { LoginPage } from "./scenes/login/page";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import { SignUpPage } from "./scenes/signup/page";
import { UserContextProvider } from "./context/userContext";



function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<UserContextProvider>
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutUs />} />
						<Route path="/hotels" element={<HotelBooking />} />
						<Route path="/attractions" element={<Attractions />} />
						<Route path="/contact" element={<Contact />} />
						{/* <Route path="/mice" element={<Mice />} /> */}
						<Route path="/packages" element={<Packages />} />
						<Route path="/vehiclefleet" element={<VehicleFleet />} />
						<Route path="/packages" element={<Packages />} />
						<Route path="/terms" element={<Terms />} />
						<Route path="/privacy" element={<Privacy />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignUpPage />} />
					</Routes>
					<Footer />
					<Copyright />
				</UserContextProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
