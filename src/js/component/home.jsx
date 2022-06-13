import React from "react";
import NavBar from "./navbar.jsx";
import Card from "./card.jsx";
import Jumbottom from "./jumbotton.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (
		<div className="container-fluid p-3">
			<NavBar />
			<div className="container mt-3">
				<div className="row">
					<Jumbottom />
				</div>
				<div className="row">
					<div className="col-md-4 col-lg-3 my-5">
						<Card
							title="Audi A3 Sportback, Elige tu nuevo camino"
							text="Con un diseño más deportivo que nunca y las tecnologías más innovadoras, el Audi A3 Sportback está preparado para que lo retes."
							imageUrl="https://i.ytimg.com/vi/2XFcNKaUOnA/maxresdefault.jpg"
						/>
					</div>
					<div className="col-md-4 col-lg-3 my-5">
						<Card
							title="Audi FIN DE LA CONBUSTION!!"
							text="El último Audi de combustión probablemente será el nuevo Audi Q5, por lo pedido por la UE, apartir del 2035 sera el fin de la combustion."
							imageUrl="https://phantom-marca.unidadeditorial.es/7b1d57acfe615f25720e81cc425528e1/crop/73x86/954x581/resize/1320/f/jpg/assets/multimedia/imagenes/2021/06/05/16228740250367.jpg"
						/>
					</div>
					<div className="col-md-4 col-lg-3 my-5">
						<Card
							title="Audi RS e-tron GT 100% electrico"
							text="Presentamos el superdeportivo 100% eléctrico más extremo, el Audi RS e-tron GT. El coche eléctrico más deportivo de Audi Sport."
							imageUrl="https://www.hibridosyelectricos.com/media/hibridos/images/2020/11/05/2020110517285195262.jpg"
						/>
					</div>
					<div className="col-md-4 col-lg-3 my-5">
						<Card
							title="Audi traccion quattro"
							text="quattro es un sistema de conducción de tracción integral permanente. Si las ruedas de un eje pierden adherencia, el par motor se redirige automáticamente al eje opuesto."
							imageUrl="https://www.quadis.es/documents/80345/95274/como-funciona-la-traccion-quattro4.jpg/e801be9e-c397-4d44-8bed-b9cdc5307500?t=1471866603000"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
