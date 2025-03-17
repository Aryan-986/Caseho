import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import HeroBanner from '../components/Banner'
import NewsletterBox from '../components/NewsletterBox'
import Layout from '../components/Layout'
import HappyCustomers from '../components/HappyCustomer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <Layout/>
      <BestSeller/>

      <HappyCustomers/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
