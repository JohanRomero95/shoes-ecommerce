import "../src/styles/App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PromoHeader from "./components/Promo/PromoHeader/PromoHeader";
import FiltroPorSubCategoria from "./components/Filtro/FiltroPorSubCategoria";
import FiltroPorEncabezado from "./components/Filtro/FiltroPorEncabezado";
import ListaPorTitulo from "./components/ListaPorTitulo/ListaPorTitulo";
import DetalleProducto from "./components/DetalleProducto/DetalleProducto";
import ScrollToTop from "./helpers/ScrollToTop";
import CarritoProvider from "./context/CarritoContext";
import { TallaProvider } from "./context/TallaContext";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			<BrowserRouter>
				<TallaProvider>
					<CarritoProvider>
						<PromoHeader />
						<Navbar />
						<ScrollToTop />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/:titulo" element={<ListaPorTitulo />} />
							<Route path="/:titulo/:encabezado" element={<FiltroPorEncabezado />} />
							<Route
								path="/:titulo/:encabezado/:subCategorias"
								element={<FiltroPorSubCategoria />}
							/>
							<Route exact path="/producto/:id/" element={<DetalleProducto />} />
						</Routes>
						<Footer />
					</CarritoProvider>
				</TallaProvider>
			</BrowserRouter>
			<Toaster />
		</>
	);
}

export default App;
