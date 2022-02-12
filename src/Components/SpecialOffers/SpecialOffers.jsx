import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import Container from "../Common/Container/Container";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './specialOffers.scss';

import arrowLeft from '../../images/promotion/arrow-left.svg';
import arrowRight from '../../images/promotion/arrow-right.svg';
import iconImg from '../../images/special-offers/icon.png';
import bikeImg from '../../images/special-offers/bike.png';
import taxiImg from '../../images/special-offers/taxi.png';
import shavermaImg from '../../images/special-offers/shaverma.png';
import googleMapImg from '../../images/special-offers/google-map.png';



const SpecialOffers = () => {
    return (
        <section className="special-offers">
            <Container>
                <div className="special-offers__inner">
                    <div className="special-offers__top special-offers-top slider-top">
                        <div className="slider-top__left">
                            <h4 className="slider-top__title name-block">
                                Cпециальные предложения
                            </h4>
                            <div className="special-offers__navigation swiper-navigation ">
                                <div className="swiper-button-next navigation-custom__next special-offers__next">
                                    <img src={arrowLeft} alt="" />
                                </div>
                                <div className="swiper-button-prev navigation-custom__prev special-offers__prev">
                                    <img src={arrowRight} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="special-offers__paginate swiper-pagination pagination-custom">
                        </div>
                    </div>

                    <Swiper
                        navigation={{
                            prevEl: '.special-offers__next',
                            nextEl: '.special-offers__prev',
                        }}
                        pagination={{
                            el: '.special-offers__paginate'
                        }}
                        modules={[Navigation, Pagination]}
                        className="mySwiper special-offers__swiper"
                        slidesPerView={2}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            760: {
                                slidesPerView: 1.2,
                                spaceBetween: 20
                            },
                            990: {
                                slidesPerView: 1.5,
                                spaceBetween: 20
                            },
                            1100: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            }
                        }}
                        spaceBetween={20}
                    >
                        <SwiperSlide>
                            <div className="special-offers__item offers-promotion">
                                <div className="special-offers__icon offers-promotion__icon">
                                    <img src={iconImg} alt="" />
                                </div>

                                <div className="special-offers__content offers-promotion__content">
                                    <div className="offers-promotion__weight">
                                        3 КГ 🤤
                                    </div>
                                    <p className="offers-promotion__desript">
                                        Сочнейшей шаурмы
                                    </p>
                                    <div className="offers-promotion__call-action">
                                        Разыгрываем среди, Вас
                                    </div>
                                </div>

                                <div className="offers-promotion__image">
                                    <img src={shavermaImg} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="special-offers__item free-shopping">

                                <div className="special-offers__icon offers-promotion__icon">
                                    <img src={iconImg} alt="" />
                                </div>

                                <div className="free-shopping__content">
                                    <div className="free-shopping__name">
                                        Бесплатная доставка
                                    </div>
                                    <p className="free-shopping__descript">
                                        по городу от 250грн
                                    </p>
                                </div>

                                <div className="free-shopping__images">
                                    <div className="free-shopping__taxi">
                                        <img src={taxiImg} alt="" />
                                    </div>
                                    <div className="free-shopping__bike">
                                        <img src={bikeImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="special-offers__item map-google">
                                <div className="map-google__image">
                                    <img src={googleMapImg} alt="" />
                                </div>
                                <div className="map-google__bottom">
                                    <div className="map-google__text">
                                        <span>Google maps</span> оставил коммент <span>-10%</span> получил
                                    </div>
                                    <div className="map-google__icon map-google__icon">
                                        <img src={iconImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </Container>
        </section>
    )
}
export default SpecialOffers;