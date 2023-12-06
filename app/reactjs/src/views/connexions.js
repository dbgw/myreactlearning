import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ContentPageStyle } from "../assets/styles/frontGlobalStyle";
import DefaultPage from "../components/defaultPage";
import HeaderDefaultPage from "../components/front/headerDefaultPage";
import Base from "../theme/front/base";
import ImageBanner from "../assets/images/image-slide.jpg";
import ROUTES from "../config/routes";

export default function Connexions() {
  const dataCrumbs = [
    { name: "Accueil", path: "/" },
    {
      name: "CONNEXION",
      path: ROUTES.CHARTE_COOKIES.url,
    },
  ];
  return (
    <Base>
      <HeaderDefaultPage title="CONNEXIONS" image={ImageBanner} />
      <ContentPageStyle>
        <Container>
          <DefaultPage bradcrumbPage={dataCrumbs}>
            <h2>ONGLETS</h2>
            <p>Ces onglets permettent la connexion .</p>

          </DefaultPage>
        </Container>
      </ContentPageStyle>
    </Base>
  );
}
