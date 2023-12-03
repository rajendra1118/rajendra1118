import React from 'react'

function HeroSection() {
  return (
      <section id='heroSection' className='hero--section'>
         <div className='hero--section--contant--box'>
            <div className='hero--section--contant' >
                <p className='section--title' >Hey I'M Raj </p>
                  <h1 className='hero--section--title'>
                    <span className='hero--section--title--color'>Full Stack</span>{" "}
                    <br />
                    Developer
                  </h1>
                <p className='hero--section-description'>
                I am a passionate Full Stack Web Developer who focus
                <br /> on writing clean and user friendly applications
                    

                </p>

            </div>
             <a href="https://drive.google.com/file/d/1ksBlINSq_tmnCmsC4_f7pp_DtkmjuEml/view?usp=sharing"><button className='btn btn-primary'>Resume</button></a>
             
         </div>

         {/* <div className='hero--section--img'>
            <img src="./img/profile_img.JPG" alt="my profile img" />
         </div> */}

      </section>
  )
}

export default HeroSection