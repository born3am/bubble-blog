import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Bubble Blog</h1>
      <h1>"A blog for your bubble"</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
        necessitatibus natus dolor eveniet amet modi voluptates, quaerat, earum
        minima sunt ipsum odio quod numquam. Animi totam sequi a veritatis
        ducimus!
      </p>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
        necessitatibus natus dolor eveniet amet modi voluptates, quaerat, earum
        minima sunt ipsum odio quod numquam. Animi totam sequi a veritatis
        ducimus!
      </p>
      <Link href="/blogs">
        <a>Check list of Blogs</a>
      </Link>
    </div>
  );
}
