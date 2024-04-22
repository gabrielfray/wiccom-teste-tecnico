import Seo from "@/components/seo";
import About from "@/components/about";
import BannerCarousel from "@/components/bannerCarousel";
import BannerModal from "@/components/bannerModal";
import ImageSection from "@/components/imageSection";
import MultiCarousel from "@/components/multiCarousel";
import PaymentBanner from "@/components/paymentBanner";
import ProductsSections from "@/components/productsSection";
import ProductsSectionHighlight from "@/components/productsSectionHighlight";
import RegisterSection from "@/components/register";
import SplitedSection from "@/components/splited";
import WeekFavorites from "@/components/weekFavorites";

import * as Carrousel from "@/components/carrousel";

const HomePage = () => {
  return (
    <>
      <Seo
        title="Sapatella"
        description="Oi, a gente já se conhece? Muito prazer, Sapatella! Somos uma Marca de moda que oferece sapatos e acessórios feitos para te encantar. Vamos juntas?"
      />
      <BannerCarousel
        items={Array.from({ length: 3 }, () => Carrousel.bannerCarouselItems)}
      />
      <PaymentBanner />
      <ProductsSections />
      <MultiCarousel item={Carrousel.multiCarouselItems} />
      <WeekFavorites
        props={{
          title: "Favoritos da Semana",
          totalSlides: 12,
          slidesPerGroup: 4,
          slidesPerView: 4,
        }}
      />
      <ProductsSectionHighlight />
      <SplitedSection />
      <ImageSection />
      <About />
      <RegisterSection />
    </>
  );
};

export default HomePage;
