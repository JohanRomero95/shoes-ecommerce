import "../src/styles/App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ListaDeProductos from "./components/ListaDeProductos/ListaDeProductos";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PromoHeader from "./components/Publicidad/PromoHeader/PromoHeader";
import NovedadesProductos from "./components/NovedadesProductos/NovedadesProductos";
import ZapatillasMujer from "./components/Ropa/ZapatillasMujer";

function App() {
	return (
		<div>
			<BrowserRouter>
				<PromoHeader />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:titulo" element={<ListaDeProductos />} />
					<Route path="/:titulo/:encabezado" element={<NovedadesProductos />} />
					<Route path="/:titulo/:encabezado/:subCategorias" element={<ZapatillasMujer />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
