import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Ourservices from "./components/Ourservices";
import About from "./components/About";
import Message from "./components/Message";
import Why_us from "./components/Why_us";
import Enquire from "./components/Enquire";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
   <div className=" mt-14">
   <Hero></Hero>
   <Services></Services>
   <Ourservices></Ourservices>
   <About></About>
   <Message></Message>
   <Why_us></Why_us>
   <Enquire></Enquire>
   <Footer></Footer>
   </div>
   </>
  );
}
