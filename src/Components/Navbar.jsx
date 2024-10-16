import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <div className='bg-white p-5 flex gap-5 items-center justify-between'>
        <AnchorLink href='/home' className='text-4xl font-bold'>Rishant Rana</AnchorLink>
        <div className='flex gap-5'>
        <AnchorLink href='/red' className='hover:bg-black hover:text-white px-3 py-2 rounded-md duration-300 text-lg font-semibold'>About</AnchorLink>
        <AnchorLink href='/green' className='hover:bg-black hover:text-white px-3 py-2 rounded-md duration-300 text-lg font-semibold'>Projects</AnchorLink>
        <AnchorLink href='/purple' className='hover:bg-black hover:text-white px-3 py-2 rounded-md duration-300 text-lg font-semibold'>Contact Me</AnchorLink>
        </div>
      </div>
  )
}

export default Navbar
