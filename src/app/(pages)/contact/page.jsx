import Breadcrumb from '@/components/breadcrumb'
import Contactsec from '@/components/contact-sec';
import React from 'react'

const Page = () => {
  return (
    <div>
      <Breadcrumb title="Contact Us" breadcrumbs={"Contact"} />
      <Contactsec />
    </div>
  );
}

export default Page