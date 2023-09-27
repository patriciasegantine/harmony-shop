import { HomeContainer, HomeContent } from './home.styles.ts'
import { Banner } from '../../components/banner/banner.tsx'
import { HomeCourses } from '../../components/home-courses/home-courses.tsx'
import { CustomerReview } from '../../components/customer-review/customer-review.tsx'
import { BestsellerProducts } from "../../components/bestseller-products/bestseller-products.tsx";
import { useEffect } from "react";

export const Home = () => {
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  }, []);
  
  return (
    <HomeContainer>
      <Banner/>
      <HomeContent>
        <BestsellerProducts/>
      </HomeContent>
      
      <HomeContent>
        <HomeCourses/>
      </HomeContent>
      
      <HomeContent>
        <CustomerReview/>
      </HomeContent>
    </HomeContainer>
  )
}
