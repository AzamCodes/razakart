import HeroSlider from "@/components/Banner";
import FAQComponent from "@/components/FAQComponent";
import Navbar from "@/components/Navbar";
import ProductSwiper from "@/components/ProductSwiper";

export default function Home() {
  return (
    <div className="flex w-full items-center flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
     <Navbar/>
     <HeroSlider/>
     <ProductSwiper/>
     <FAQComponent/>
    </div>
  );
}
