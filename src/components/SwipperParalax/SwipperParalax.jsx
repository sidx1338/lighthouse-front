import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SwipperParalax.scss';

// import required modules
import {Parallax, Pagination, Navigation, Autoplay} from 'swiper/modules';

export default function SwipperParalax() {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#de500e',
                    '--swiper-pagination-color': '#e5630e',
                }}
                speed={1000}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 12000,
                }}
                modules={[Parallax, Pagination, Navigation, Autoplay]}
                className="SwiperParallax"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Наш салон готов предложить Вам обширный выбор осветительных приборов, мебели, предметов декора и аксессуаров, с помощью которых можно создать или дополнить интерьер в любом стиле
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Оказавшись у нас, Вы не останетесь без внимания. Наши высоко квалифицированные специалисты, готовы в любой момент предоставить консультацию, помочь с выбором, угостить чашечкой вкусного ароматного кофе.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Ассортимент нашего магазина представлен на всех этажах трехэтажного шоу-рума, где вы сможете не только выбрать и приобрести продукцию известных брендов, но и провести время листая один из множества каталогов, соответствующих актуальным тенденциям моды и дизайна со всего мира.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Мы всегда открыты для сотрудничества с дизайнерами, декораторами и архитекторами, а для постоянных клиентов сделаем приятные скидки.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
