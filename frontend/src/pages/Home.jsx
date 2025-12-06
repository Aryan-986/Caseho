import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import HappyCustomers from '../components/HappyCustomer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <Layout/>
      

      <HappyCustomers/>
      
    </div>
  )
}

export default Home
