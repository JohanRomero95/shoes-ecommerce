import "../src/styles/App.css";
import Home from "./components/Home/Home";
import ListaDeProductos from "./components/ListaDeProductos/ListaDeProductos";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/collections" element={<ListaDeProductos />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
