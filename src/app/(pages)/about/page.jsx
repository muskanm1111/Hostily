import About from '@/components/about';
import Abt from '@/components/abt';
import Amenities from '@/components/amenities';
import Breadcrumb from '@/components/breadcrumb';
import Gallery from '@/components/gallary';
import React from 'react'

const Page = () => {
  return (
    <div>
      <Breadcrumb title="About Us" breadcrumbs={"About"} />
      <About />
      <Abt />
      <Amenities />
      <Gallery />
      

    </div>
  );
}

export default Page