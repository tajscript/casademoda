"use client"

import Nav from "@/components/Nav";
import style from "@/styles/home.module.css";
import Image from "next/image";
import featured from "@/public/featuredImg.png";
import product from "@/public/product.jpg";
import product1 from "@/public/product1.jpg";
import product2 from "@/public/product2.jpg";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import data from "@/data/data";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";


export default function Home() {
  return (
    <main className={style.home}>
      <nav className={style.nav}><Nav /></nav>

      <div className={style.wrapper}>
        <section className={style.hero}>
          <div className={style.inner}>
            CASA DE MODA
          </div>
          <div className={style.underlay}></div>
          <div className={style.arrow__down}>
          <LiaLongArrowAltDownSolid />
          </div>

          <div className={style.hero__desc}>
            <h1>CASA <span>DE MODA</span></h1>
            <h3>Original, Exclusive, Latest <br /> Sneakers & Clothing Store</h3>
            <button>Shop Now</button>
          </div>

          <Image src={featured.src} width={500} height={500} alt="Featured Image" className={style.featured__image} />
        </section>

        <section className={style.arrivals}>
          <h3>NEW ARRIVALS</h3>
          <div className={style.arrival__wrapper}>
            <Swiper 
              className={style.product__wrapper}
              modules={[ Navigation ]}
              slidesPerView={1.2}
              spaceBetween={10}
              draggable={true}
              navigation
              mousewheel={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              cssMode={true}
              >
                {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <Link href="/" className={style.product__index}>
                    <Image src={item.image} width={500} height={500} alt="Product Image" className={style.product__image} />
                      <h2>{item.title}</h2>
                      <h4>NGN {item.amount}</h4>
                    </Link>
                </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </section>

        <section className={style.casa}>
          <h4>CASA DE MODA</h4>
          <h4>CASA DE MODA</h4>
          <h4>CASA DE MODA</h4>
          <h4>CASA DE MODA</h4>
          <h4>CASA DE MODA</h4>
          <h4>CASA DE MODA</h4>
          <h4>CASA DE MODA</h4>
          <h4>CASA DE MODA</h4>
          <h4>CASA DE MODA</h4>
          <h4>CASA DE MODA</h4>
          <h4>CASA DE MODA</h4>
          <h4>CASA DE MODA</h4>
        </section>

        <section className={style.banner}>
          <div className={style.banner__wrapper} style={{ backgroundImage: `url(${product.src})`}}>
            <div className={style.banner__items}>
              <h3>T-SHIRTS</h3>
              <Link href="/" className={style.banner__link}>See More</Link>
            </div>
          </div>

          <div className={style.banner__wrapper} style={{ backgroundImage: `url(${product1.src})`}}>
            <div className={style.banner__items}>
              <h3>FOOTWEARS</h3>
              <Link href="/" className={style.banner__link}>See More</Link>
            </div>
          </div>

          <div className={style.banner__wrapper} style={{ backgroundImage: `url(${product2.src})`}}>
            <div className={style.banner__items}>
              <h3>HEADWEARS</h3>
              <Link href="/" className={style.banner__link}>See More</Link>
            </div>
          </div>
        </section>

        <section className={style.all__product}>
          <h3>ALL PRODUCTS</h3>
          <p>Find everything you need to look and feel your best, <br /> and shop the latest men's fashion and lifestyle <br /> products. We deliver Nationwide</p>
          <div className={style.filter}>
            <button>Tshirt</button>
            <button>Sneakers</button>
            <button>Shoes</button>
            <button>Caps</button>
            <button>Hats</button>
          </div>

          <div className={style.all__wraapper}>
            {data.map((item) => (
                    <Link href="/" className={style.all__index} key={item.id}>
                    <Image src={item.image} width={500} height={500} alt="Product Image" className={style.all__image} />
                      <h2>{item.title}</h2>
                      <h4>NGN {item.amount}</h4>
                    </Link>
            ))}
          </div>
        </section>

      </div>
    </main> 
  );
}
