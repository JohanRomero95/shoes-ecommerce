import "../src/styles/App.css";
import ListaDeProductos from "./components/ListaDeProductos/ListaDeProductos";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<hr />
				<Routes>
					<Route path="/" element={<ListaDeProductos />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
