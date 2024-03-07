"use client"

import Nav from "@/components/Nav";
import style from "@/styles/home.module.css";
import Image from "next/image";
import featured from "@/public/featuredImg.png";
import product from "@/public/product.jpg";
import product1 from "@/public/product1.jpg";
import product2 from "@/public/product2.jpg";
import story from "@/public/story.jpg";
import story1 from "@/public/story1.jpg";
import story2 from "@/public/story2.jpg";
import story3 from "@/public/story3.jpg";
import story4 from "@/public/story4.jpg";
import story5 from "@/public/story5.jpg";
import story6 from "@/public/story6.jpg";
import story7 from "@/public/story7.jpg";
import story8 from "@/public/story8.jpg";
import story9 from "@/public/story9.jpg";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import data from "@/data/data";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";


export default function Home() {
  useLayoutEffect(() => {
    let home = gsap.context(() => {
    gsap.to("#casa", {
      xPercent: 30, 
      repeat: -1, 
      duration: 10, 
      ease: "none",
      yoyo: true
    });
  })
    return () => {
        home.revert();
    }
    }, [])

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
                  slidesPerView: 2.5,
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
                    <div className={style.product__image__wrapper}>
                      <Image src={item.image} width={500} height={500} alt="Product Image" className={style.product__image} />
                    </div>
                      <h2>{item.title}</h2>
                      <h4>NGN {item.amount}</h4>
                    </Link>
                </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </section>

        <section className={style.casa}>
          <div id="casa" className={style.casa__wrapper}>
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
          <h4>CASA DE MODA</h4>
          <h4>CASA DE MODA</h4>
          <h4>CASA DE MODA</h4>
          </div>
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
          <p>Find everything you need to look and feel your best, and shop the latest men's fashion and lifestyle products. We deliver Nationwide</p>
          <div className={style.filter}>
            <button>All</button>
            <button>Tshirt</button>
            <button>Sneakers</button>
            <button>Caps</button>
          </div>

          <div className={style.all__wrapper}>
            {data.map((item) => (
                    <Link href="/" className={style.product__index} key={item.id}>
                    <div className={style.product__image__wrapper}>
                      <Image src={item.image} width={500} height={500} alt="Product Image" className={style.all__image} />
                    </div>
                      <h2>{item.title}</h2>
                      <h4>NGN {item.amount}</h4>
                    </Link>
            ))}
          </div>
        </section>

        <section className={style.contact}>
          <div className={style.contact__wrapper}>
            <h3>CASA DE MODA</h3>
            <p>Get newsletter update for upcoming product <br /> and best discount for all item</p>
            <form className={style.form}>
              <input type="email" placeholder="Enter your email" required />
              <button>Submit</button>
            </form>
          </div>

          <div className={style.contact__cont}>
            <div className={style.contact__flex}>
              <h3>Product</h3>
              <Link href="/" target="_blank" className={style.contact__link}>Tshirt</Link>
              <Link href="/" target="_blank" className={style.contact__link}>Sneakers</Link>
              <Link href="/" target="_blank" className={style.contact__link}>Shoes</Link>
              <Link href="/" target="_blank" className={style.contact__link}>Caps</Link>
              <Link href="/" target="_blank" className={style.contact__link}>Hats</Link>
            </div>

            <div className={style.contact__flex}>
              <h3>Our Socials</h3>
              <Link href="/" target="_blank" className={style.contact__link}>Instagram</Link>
              <Link href="/" target="_blank" className={style.contact__link}>Twitter</Link>

              <h5>Contact Us</h5>
              <Link href="/" target="_blank" className={style.contact__link}>Email</Link>
            </div>
          </div>
        </section>

        <section className={style.story}>
          <div className={style.line}></div>

          <div className={style.swiper__wrapper}>
          <Swiper
              slidesPerView={1.2}
              draggable={true}
              mousewheel={true}
              loop={true}
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1440: {
                  slidesPerView: 4,
                },
              }}
              modules={[Autoplay]}
              >
                  <SwiperSlide className={style.story__cont}>
                    <Image src={story.src} width={500} height={500} alt="Story Image" className={style.story__image} />
                  </SwiperSlide>
                  <SwiperSlide className={style.story__cont}>
                    <Image src={story1.src} width={500} height={500} alt="Story Image" className={style.story__image} />
                  </SwiperSlide>
                  <SwiperSlide className={style.story__cont}>
                    <Image src={story2.src} width={500} height={500} alt="Story Image" className={style.story__image} />
                  </SwiperSlide>
                  <SwiperSlide className={style.story__cont}>
                    <Image src={story3.src} width={500} height={500} alt="Story Image" className={style.story__image} />
                  </SwiperSlide>
                  <SwiperSlide className={style.story__cont}>
                    <Image src={story4.src} width={500} height={500} alt="Story Image" className={style.story__image} />
                  </SwiperSlide>
                  <SwiperSlide className={style.story__cont}>
                    <Image src={story5.src} width={500} height={500} alt="Story Image" className={style.story__image} />
                  </SwiperSlide>
                  <SwiperSlide className={style.story__cont}>
                    <Image src={story6.src} width={500} height={500} alt="Story Image" className={style.story__image} />
                  </SwiperSlide>
                  <SwiperSlide className={style.story__cont}>
                    <Image src={story7.src} width={500} height={500} alt="Story Image" className={style.story__image} />
                  </SwiperSlide>
                  <SwiperSlide className={style.story__cont}>
                    <Image src={story8.src} width={500} height={500} alt="Story Image" className={style.story__image} />
                  </SwiperSlide>
                  <SwiperSlide className={style.story__cont}>
                    <Image src={story9.src} width={500} height={500} alt="Story Image" className={style.story__image} />
                  </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <footer className={style.footer}>
        </footer>

      </div>
    </main> 
  );
}
