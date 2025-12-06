
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'

import Layout from '../components/Layout'
import HappyCustomers from '../components/HappyCustomer'

const Home = () => {
  return (
    <div>
     
      <LatestCollection/>
      <Layout/>
      <BestSeller/>

      <HappyCustomers/>
      
    </div>
  )
}

export default Home
