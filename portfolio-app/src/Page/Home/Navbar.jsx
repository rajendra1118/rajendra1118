import React from 'react'

import { useState,useEffect } from 'react'
import { Link } from 'react-scroll'

 const Navbar = () => {
   const [navActive,setNavActive]= useState(false)
 
   const toogleNav=()=>{
    setNavActive(!navActive)
   }

   const closeMenu= ()=>{
    setNavActive(false)
   }
  

   useEffect(()=>{

     const hendleResize=()=>{
       if(window.innerWidth <=500){
        closeMenu
       }
     }

     window.addEventListener("resize", hendleResize);


    return ()=>{
      window.removeEventListener("resize",hendleResize);
    }

   },[])
  

  useEffect(()=>{
    if(window.innerWidth <=1200){
      closeMenu
    }
  },[])


  return (
   <nav className={`navbar ${navActive?"active":""}`}>
     <div>
       {/* <img className='logo-img' src="./img/logo_img.png" alt="logo" /> */}
       Rajendra Choudhary
     </div>

     <a  className={`nav__dropDown${navActive ?"active":""}`}  onClick={toogleNav} >


      <span className='nav__dropDown__line' ></span>
      <span className='nav__dropDown__line' ></span>
      <span className='nav__dropDown__line' ></span>
      
     </a>

     <div className={`navbar--items${navActive?"active":""}`} >
      <ul>
        <li>
          <Link onClick={closeMenu}
          activeClass='navbar--active-content'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to='heroSection'
          className='navbar--content'

          >
            Home
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu}
          activeClass='navbar--active-content'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to='AboutMe'
          className='navbar--content'

          >
            About Me
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu}
          activeClass='navbar--active-content'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to='MySkills'
          className='navbar--content'

          >
            skills
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu}
          activeClass='navbar--active-content'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to='MyPortfolio'
          className='navbar--content'

          >
           Project
          </Link>
        </li>
      </ul>

     </div>

     <Link
     onClick={closeMenu}
     activeClass='navbar--active-content'
     spy={true}
     smooth={true}
     offset={-70}
     duration={500}
     to='ContactMe'
     className='btn btn-outline-primary'
      > Contect Me</Link>

   </nav>



  )
}


export default Navbar;