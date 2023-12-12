import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import BannerHome from "../components/front/bannerHome";
import Base from "../theme/front/base";
import iconParcours from "../assets/images/icons-services-home/homepage-fluxparcours.svg";
import iconPourquoichoisir from "../assets/images/icons-services-home/homepage-pourquoichoisir.svg";
import iconRep4 from "../assets/images/icons-services-home/home-page-04.svg";
import iconRep5 from "../assets/images/icons-services-home/home-page-05.svg";
import iconRep6 from "../assets/images/icons-services-home/home-page-06.svg";
import iconRep7 from "../assets/images/icons-services-home/home-page-07.svg";
import {
  ContentPageStyle,
  HomeReparateur,
  HomeBlocs,
} from "../assets/styles/frontGlobalStyle";
import { Link } from "react-router-dom";
import slideImage1 from "../assets/images/slider-image/home-slider-1.png";
import slideImage2 from "../assets/images/slider-image/home-slider-2.png";
import slideImage3 from "../assets/images/slider-image/home-slider-3.png";
import slideImage4 from "../assets/images/slider-image/home-slider-4.png";
import slideImage5 from "../assets/images/slider-image/home-slider-5.png";
import slideImage6 from "../assets/images/slider-image/home-slider-6.png";
import noImage from "../assets/images/noImage.png";
import * as vars from "../vars";

export default function Home() {
  const getPathImage = (image) => (image ? vars.pathImage + image : noImage);
  const universe = useSelector((state) => state.universe);
  const isDisplayedBottom = true;
  const sliderImages = [
    {
      id: 1,
      url: slideImage1,
    },
    {
      id: 2,
      url: slideImage2,
    },
    {
      id: 3,
      url: slideImage3,
    },
    {
      id: 4,
      url: slideImage4,
    },
    {
      id: 5,
      url: slideImage5,
    },
    {
      id: 6,
      url: slideImage6,
    },
  ];
  return (
    <Base>
      <BannerHome
        sliderBanner={sliderImages}
        title="Faites réparer les objets qui vous sont chers"
        isDisplayedBottom={false}
      />
      
      <ContentPageStyle>
        <Container>
          <HomeReparateur>
            <h1 className="item-reparateurs-solution">
              Il n'a jamais été aussi facile de trouver un réparateur
            </h1>
            <Row>
              <img src={iconParcours} />
            </Row>
          </HomeReparateur>
          <HomeBlocs>
            <Row>
              {universe.allUniverses &&
                universe.allUniverses.map((row) => (
                  <Col lg={4} sm={6} className="item-cat-univers" key={row.id}>
                    <Link
                      to={`/univers/${row.slug}-${row.id}`}
                      className="content-item-univers"
                    >
                      <img src={getPathImage(row.imageHome)} alt={row.name} />
                      <p className="name-cat-univers">{row.name}</p>
                    </Link>
                  </Col>
                ))}
            </Row>
          </HomeBlocs>
          <HomeReparateur>
            <h1 className="title-bloc">Pourquoi choisir Fingz ?</h1>
            <Row>
              <img src={iconPourquoichoisir} />
            </Row>
          </HomeReparateur>
          
        </Container>
      </ContentPageStyle>
      <BannerHome
        sliderBanner={sliderImages}
        title="Faites réparer les objets qui vous sont chers"
        isDisplayedBottom={true}
      />
    </Base>
  );
}
