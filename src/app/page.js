import About from '@/components/about'
import Banner from '@/components/banner'
import RestaurantShowcase from '@/components/imgabout'
import ImageAbout from '@/components/imgabout'
import Offer from '@/components/offer'

import Rooms from '@/components/rooms'
import Servicescard from '@/components/servicecard'
import Testimonials from '@/components/testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner />
      <About />
      <Rooms />
      <Offer />
      <Servicescard />
      <ImageAbout />
      <main>
        {/* Example with reversed layout */}
        <RestaurantShowcase
          imageSrc="/1.3.jpeg"
          imageAlt="Chef preparing gourmet meal"
          title="24×7 Security"
          description="Your safety is our priority. With 24/7 security, myostel offers you a safe environment where you can focus on your studies and personal development with peace of mind."
          ctaText="MEET OUR TEAM"
          ctaLink="#team"
          reversed={true}
        />
      </main>
      <Testimonials />
    </div>
  );
}

export default page