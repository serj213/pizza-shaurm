import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import Container from "../Common/Container/Container";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './promotion.scss';

import arrowLeft from '../../images/promotion/arrow-left.svg';
import arrowRight from '../../images/promotion/arrow-right.svg';

import cartImgFirst from '../../images/promotion/01.png';
import cartImgSecond from '../../images/promotion/02.png';

const Promotion = () => {
    return (
        <section className="promotion">
            <Container>
                <div className="promotion__inner">
                    <div className="promotion__top promotion-top slider-top">
                        <div className="slider-top__left">
                            <h4 className="slider-top__title name-block">
                                Выгодные акции
                            </h4>
                            <div className="promotion-item__navigation swiper-navigation ">
                                <div className="swiper-button-next navigation-custom__next promotion-next">
                                    <img src={arrowLeft} alt="" />
                                </div>
                                <div className="swiper-button-prev navigation-custom__prev promotion-prev">
                                    <img src={arrowRight} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="promotion__paginate swiper-pagination pagination-custom">
                        </div>


                    </div>

                    <Swiper
                        navigation={{
                            prevEl: '.promotion-next',
                            nextEl: '.promotion-prev',
                        }}
                        pagination={{
                            el: '.promotion__paginate'
                        }}
                        modules={[Navigation, Pagination]}
                        className="mySwiper promotion__swiper"
                        slidesPerView={1.1}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.1,
                                spaceBetween: 20
                            },
                            370: {
                                slidesPerView: 1.3,
                                spaceBetween: 20
                            },
                            500: {
                                slidesPerView: 1.5,
                                spaceBetween: 20
                            },
                            600: {
                                slidesPerView: 1.8,
                                spaceBetween: 20
                            },
                            760: {
                                slidesPerView: 2.1,
                                spaceBetween: 20
                            },
                            990: {
                                slidesPerView: 2.8,
                                spaceBetween: 20
                            },
                            1200: {
                                slidesPerView: 3.44,
                                spaceBetween: 20,
                            }
                        }}
                        spaceBetween={20}
                    >
                        <SwiperSlide>
                            <div className="promotion-item">
                                <div className="promotion-item__img">
                                    <img src={cartImgFirst} alt="" />
                                </div>
                                <div className="promotion-item__content">
                                    <div className="promotion-item__name">
                                        Две пиццы Мясная + Сырная
                                    </div>
                                    <p className="promotion-item__cost">
                                        120 гривен
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promotion-item">
                                <div className="promotion-item__img">
                                    <img src={cartImgSecond} alt="" />
                                </div>
                                <div className="promotion-item__content">
                                    <div className="promotion-item__name">
                                        Пицца + Шаурма
                                    </div>
                                    <p className="promotion-item__cost">
                                        120 гривен <span>-25%</span>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promotion-item">
                                <div className="promotion-item__img">
                                    <img src={cartImgFirst} alt="" />
                                </div>
                                <div className="promotion-item__content">
                                    <div className="promotion-item__name">
                                        Две пиццы Мясная + Сырная
                                    </div>
                                    <p className="promotion-item__cost">
                                        120 гривен
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promotion-item">
                                <div className="promotion-item__img">
                                    <img src={cartImgSecond} alt="" />
                                </div>
                                <div className="promotion-item__content">
                                    <div className="promotion-item__name">
                                        Две пиццы Мясная + Сырная
                                    </div>
                                    <p className="promotion-item__cost">
                                        120 гривен
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promotion-item">
                                <div className="promotion-item__img">
                                    <img src={cartImgFirst} alt="" />
                                </div>
                                <div className="promotion-item__content">
                                    <div className="promotion-item__name">
                                        Две пиццы Мясная + Сырная
                                    </div>
                                    <p className="promotion-item__cost">
                                        120 гривен
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="promotion-item">
                                <div className="promotion-item__img">
                                    <img src={cartImgFirst} alt="" />
                                </div>
                                <div className="promotion-item__content">
                                    <div className="promotion-item__name">
                                        Пицца + Шаурма
                                    </div>
                                    <p className="promotion-item__cost">
                                        120 гривен <span>-25%</span>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}

export default Promotion;