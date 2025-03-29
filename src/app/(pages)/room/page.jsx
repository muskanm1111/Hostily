import Breadcrumb from '@/components/breadcrumb';
import Roomlist from '@/components/roomlist';
import React from 'react'

const Page = () => {
  return (
    <div>
      
      <Breadcrumb title="Our Rooms" breadcrumbs={"Rooms"} />
      <Roomlist  />
    </div>
  );
}

export default Page