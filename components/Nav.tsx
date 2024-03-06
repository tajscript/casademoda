import style from "@/styles/nav.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { IoMdSearch } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <nav className={style.nav}>
        <div className={style.wrapper}>
        <Link href="/" className={style.logo__wrapper}>
            <Image src={logo.src} width={500} height={500} alt="logo" className={style.logo} />
        </Link>

        <section className={style.items}>
            <Link href="/" className={style.item}>T-shirts</Link>
            <Link href="/" className={style.item}>Footwears</Link>
            <Link href="/" className={style.item}>New Arrivals</Link>
        </section>

        <section className={style.icons}>
            <Link href="/" className={style.icon}>
                <IoMdSearch />
            </Link>
            <Link href="/" className={style.icon}>
                <BiUser />
            </Link>
            <Link href="/" className={style.icon}>
                <IoBagOutline />
            </Link>
        </section>
        </div>
    </nav>
  )
}

export default Nav