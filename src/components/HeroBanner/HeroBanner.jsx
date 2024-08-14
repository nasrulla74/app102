'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

import { urlFor } from '../../libs/sanity';

const HeroBanner = ({ heroBanner }) => {

  
  return (
    <div className='main-container '>
    <div className="hero-banner-container mt-10 hidden lg:block">
      <div>
        <p className="beats-solo m-6">{heroBanner.smallText}</p>
        <h3 className='m-6'>{heroBanner.midText}</h3>
        {/* <h1>{heroBanner.largeText1}</h1> */}

        {/* {heroBanner.image ? 
         <Image className="hero-banner-image" width={700} height={500}  src={urlFor(heroBanner.image && heroBanner.image[0]).url()} alt="hero_image" />
       
        : 
        <Image className="hero-banner-image" width={300} height={300} src='/assets/no_image.jpg' alt={slug} />

      } */}

        <Image src={urlFor(heroBanner.image).url()} alt="headphones" className="hero-banner-image" width={700} height={500} />

        <div>
          <Link href={"#"} className='m-6'>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          {/* <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeroBanner