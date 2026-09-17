import Hero from "../../sections/Home/Hero/Hero";
import HomeAbout from "../../sections/Home/HomeAbout/HomeAbout";
import Products from "../../sections/Home/Products/Products";
import Contact from "../../sections/Home/Contact/Contact";

function Home() {
  return (
    <main>
      <Hero />
      <HomeAbout />
      <Products />
      <Contact />
    </main>
  );
}

export default Home;