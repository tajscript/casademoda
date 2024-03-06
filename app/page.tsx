import Nav from "@/components/Nav";
import style from "@/styles/home.module.css";
import Image from "next/image";
import featured from "@/public/featuredImg.png";

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
          <div className={style.hero__desc}>
            <h1>CASA <span>DE MODA</span></h1>
            <h3>Original, Exclusive, Latest <br /> Sneakers & Clothing Store</h3>
            <button>Shop Now</button>
          </div>

          <Image src={featured.src} width={500} height={500} alt="Featured Image" className={style.featured__image} />
        </section>
      </div>
    </main> 
  );
}
