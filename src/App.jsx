import "../src/styles/App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ListaDeProductos from "./components/ListaDeProductos/ListaPorTitulo";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PromoHeader from "./components/Publicidad/PromoHeader/PromoHeader";
import FiltroPorSubCategoria from "./components/Filtro/FiltroPorSubCategoria";
import FiltroPorEncabezado from "./components/Filtro/FiltroPorEncabezado";

function App() {
	return (
		<div>
			<BrowserRouter>
				<PromoHeader />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:titulo" element={<ListaDeProductos />} />
					<Route path="/:titulo/:encabezado" element={<FiltroPorEncabezado />} />
					<Route
						path="/:titulo/:encabezado/:subCategorias"
						element={<FiltroPorSubCategoria />}
          />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
