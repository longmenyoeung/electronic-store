import React from 'react'
import Hero from '../components/Hero'
import ShopCategories from '../components/ShopCategories'
import BestDealProducts from '../components/BestDealProducts'
import GetDiscount from '../components/GetDiscount'
import PopularProduct from '../components/PopularProduct'
import HeroTwo from '../components/HeroTwo'
import CatigoriesBestDeal from '../components/CatigoriesBestDeal'
import HeroThree from '../components/HeroThree'
import MostSellingProduct from '../components/MostSellingProduct'
import TrendingProduct from '../components/TrendingProduct'
import BestSelling from '../components/BestSelling'
import ServiceHelpYouShop from '../components/ServiceHelpYouShop'
import Footer from '../components/Footer'
function Home() {
    return (
        <div>
            <Hero/>
            <ShopCategories/>
            <BestDealProducts/>
            <GetDiscount/>  
            <PopularProduct/>
            <HeroTwo/>
            <CatigoriesBestDeal/>
            <HeroThree/>
            <MostSellingProduct/>
            <TrendingProduct/>
            <BestSelling/>
            <ServiceHelpYouShop/>
            <Footer/>
        </div>
    )
}

export default Home