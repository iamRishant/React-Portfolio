import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [burger, setBurger] = useState(false);

  // Animation for button using framer motion
  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } }, // Scale up on hover
    tap: { scale: 0.9, }, // Scale down when clicked (change to 0.9 for a more subtle effect)
  };

  return (
    <div className='bg-white p-5 flex gap-5 items-center justify-between'>
      <AnchorLink href='/home' className='text-4xl font-bold sm:text-3xl'>Rishant Rana</AnchorLink>
      <div className='flex gap-5 sm:hidden lg:block sm:flex-col'>
        <AnchorLink href='/red' className='hover:bg-black hover:text-white px-3 py-2 rounded-md duration-300 text-lg font-semibold'>About</AnchorLink>
        <AnchorLink href='/green' className='hover:bg-black hover:text-white px-3 py-2 rounded-md duration-300 text-lg font-semibold'>Projects</AnchorLink>
        <AnchorLink href='/purple' className='hover:bg-black hover:text-white px-3 py-2 rounded-md duration-300 text-lg font-semibold'>Contact Me</AnchorLink>
      </div>

      <AnimatePresence>
        {
          burger && (
            <motion.div  
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: 20 }}    
              transition={{ duration: 0.2 }} 
              className='lg:hidden sm:flex sm:absolute sm:flex-col bg-white w-full top-[6vh] left-0 sm:p-5 sm:font-bold sm:items-center'
            >
              <AnchorLink href='/red' className='sm:text-3xl sm:hover:bg-black sm:duration-200 sm:hover:text-white sm:w-full sm:text-center sm:rounded-lg sm:p-3'>About</AnchorLink>
              <AnchorLink href='/green' className='sm:text-3xl sm:hover:bg-black sm:duration-200 sm:hover:text-white sm:w-full sm:text-center sm:rounded-lg sm:p-3'>Projects</AnchorLink>
              <AnchorLink href='/purple' className='sm:text-3xl sm:hover:bg-black sm:duration-200 sm:hover:text-white sm:w-full sm:text-center sm:rounded-lg sm:p-3'>Contact Me</AnchorLink>
            </motion.div>
          )
        }
      </AnimatePresence>
      
      <motion.i 
        onClick={() => setBurger(!burger)} 
        className={`text-3xl lg:hidden ${burger ? "ri-close-large-line" : "ri-menu-fill"}`}
        variants={buttonVariants}
        whileHover="hover"  // Apply hover effect
        whileTap="tap"      // Apply tap effect
      />
    </div>
  );
}

export default Navbar;
