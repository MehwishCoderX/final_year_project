
import Background from "@/components/Herosection/Background";
import HeroSection from "@/components/Herosection/HeroSection";
import Navbar from "@/components/Nav";
import Image from "next/image";
import { motion } from 'framer-motion';
import Footer from "@/components/Footer/footer";


export default function Home() {
  return (
    <div>
     
    
     <Navbar/>
     <HeroSection/>
  <Footer/>

  
     
    </div>
    
  );
}
