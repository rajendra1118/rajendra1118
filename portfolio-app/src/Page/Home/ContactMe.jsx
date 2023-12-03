import React from 'react'

export const ContactMe = () => {
  return (
    <section id='ContactMe' className='contact--section'>
        <div>
            {/* <p className='sub--title' > Get In Touch</p> */}

            <h2>Contact Me</h2>
            {/* <p className='text-lg'></p> */}
            <div className='bootom--title'> JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL</div>
        </div>
        
        <div className='contact--container'>
             
           
                      
            <div className='contact--details' >
                  <div className='contact--details--Email'>
                  <a className='contact--link' href="mailto: rhchoudhary121@gmail.com?" subject="text"><img src="../img/Email.png" alt="" />Email</a> 
                  </div>   

                  <div>
                    <a  className='contact--link'  href="tel:9785517735"><img src="../img/call.png" alt="" />call</a>
                   
                  </div>

                  <div  >
                      <a  className='contact--link' href="https://github.com/rajendra1118"> <img src="../img/github.png" alt="" />Github</a>
                  </div>
                  <div>
                    <a className='contact--link' href="https://www.linkedin.com/in/rajchoudhary01/"><img src="../img/linkedin.png" alt="" />linkedin</a>
                  </div>
            </div>
             
            
            
        </div>
       
    </section>
  )
}
