import { HomeContainer, HomeContent } from './home.styles.ts'
import { Banner } from '../../components/banner/banner.tsx'
import { OurHighlights } from '../../components/our-highlights/our-highlights.tsx'
import { HomeCourses } from '../../components/home-courses/home-courses.tsx'
import { CustomerReview } from '../../components/customer-review/customer-review.tsx'
import { WelcomeText } from '../../components/welcome-text/welcome-text.tsx'

export const Home = () => {
  return (
    <HomeContainer>
      <Banner />
      <WelcomeText />

      <HomeContent>
        <HomeCourses />
      </HomeContent>

      <HomeContent>
        <CustomerReview />
      </HomeContent>
    </HomeContainer>
  )
}
