import React from 'react'
import data from '../../data/index.json'

export const MyPortfolio = () => {
  return (
    
    <section className='portfolio--section' id="MyPortfolio">

        <div className='portfolio--container-box'>
             <div className='portfolio--container'>

                <p className='sub--title'>Recent Project</p>
                <h2 className='section--heading'>My Portfolio</h2>

             </div>
             <div >
             {/* <button className='btn btn-github'>Git Hub</button> */}
                <a href="https://github.com/rajendra1118"><button className='btn btn-github'>Git Hub</button></a>
             </div>

        </div>
        
        <div className='portfolio--section--container' >

            {data?.portfolio?.map((item,index)=>(
                     <div key={index} className='portfolio--section--card'>
                        
                        <div className='portfolio--section--img'>
                            <img src={item.src} alt="placeholder" />

                        </div>
                        <div className='portfolio--section--card--contant'>
                            <div>
                                <h4 className='portfolio--section--title'>{item.title}</h4>
                                <p className='text-md'>{item.description}</p>
                            </div>
                            <h4><span> Tech-Stack : </span>{item.tech}</h4>
                            <a href={item.link} className="text-sm portfolio--link">
                               View in Github
                           
                            <a href={item.deploylink} className='text-sm portfolio--link'>view Site</a>
                                
                            </a>
                        </div>

                     </div>
                )
                
                )}

        </div>

    </section>
  )
}
