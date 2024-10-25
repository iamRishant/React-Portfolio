import React, { useEffect, useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Navbar from './Navbar'
import vdo from './video.mp4'



const Header = () => {

    const videoRef=useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);  // Toggle the play/pause state
    }
  };

  // when video ends automatically change the state of the button
  useEffect(()=>{
    videoRef.current.onended=()=>{
      setIsPlaying(false);
      videoRef.current.currentTime = 0;  // reset the video to the start when it ends
    };
  },[])

  
  
  return (
    <div className='min-h-screen w-full bg-[#000000]' id='home'>
      <Navbar/>

      <div className='h-[90%] w-full flex sm:flex-col lg:flex-row'>
        <div className='lg:w-[50%]  text-white lg:pl-[7vw] lg:pt-[16vh] sm:w-[100vw] lg:h-[100%] sm:text-center sm:p-[4vh] sm:h-[60%]'>
            <h1 className='text-5xl mb-5'>Hello! I’m Rishant Rana</h1>
            <p className='lg:text-2xl text-justify sm:text-sm'> A passionate front-end developer with a solid foundation in HTML, CSS, JavaScript, React, Redux, SQL, and C++. Currently in my fourth year of a bachelor's degree, I have a knack for creating dynamic, user-friendly web applications. My experience includes building various projects, such as e-commerce platforms and CRUD applications, utilizing libraries like Tailwind CSS and Framer Motion for responsive design and animations.

            In addition to coding, I enjoy teaching and sharing knowledge as a tutor. I’m eager to collaborate on innovative projects that push the boundaries of web development and enhance user experiences.</p>
        </div>

        <div className='lg:w-[50%] sm:w-[100vw] lg:h-[100%] sm:h-[60%]  flex items-center flex-col '>
            <video className={`lg:h-[65vh] sm:h-[30vh] lg:mt-[15vh] h-full sm:pt-[3vh] bg-red sm:${isPlaying ? "block":"hidden"} lg:block`} ref={videoRef}>
                <source src={vdo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='mt-0 sm:mt-[1vh]'>
                <button onClick={handleToggleVideo} className='text-black bg-white p-2 rounded-lg font-bold hover:scale-105 duration-200 sm:text-xl lg:text-xl'>{isPlaying ? 'Stop Me' : 'Hear Me'}</button>
            </div>
      </div>
      </div>
      
      
      
    </div>
                
    
  )
}

export default Header
