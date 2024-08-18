'use client';

import useSWR from 'swr';
import React from 'react'
import { useState, useContext } from 'react';
import Image from 'next/image';
import { urlFor } from '@/libs/sanity';
import BookingForm from '@/components/BookingForm/BookingForm';
import Facilities from '@/components/Facilities/Facilities';
import { PiCheckCircleDuotone } from "react-icons/pi";
import { getProduct } from '@/libs/apis';
import LoadingSpinner from '../../loading';
import RoomType from '@/components/RoomTypes/RoomTypes';
import RoomType2 from '@/components/RoomTypes/RoomTypes2';
import Faqs from '@/components/Faqs/Faqs';
import ThemeContext from '@/context/themeContext';
import CustomPortableText from '@/components/PortableText/PortableText';


const ProductDetails = (props) => {
    const {
        params: { slug },
      } = props;

      
      const fetchProduct = async () => getProduct(slug);
      const { data: product, error, isLoading } = useSWR('/api/product', fetchProduct);
      const [index, setIndex] = useState(0);
      const facilities = product?.facilities;
      const faqs = product?.faqs;
      // const room_types: any = product?.room_types;

      const { showCart, setShowCart} = useContext(ThemeContext);
    
      if (error) throw new Error('Cannot fetch product!');
      if (typeof product === 'undefined' && !isLoading)
        throw new Error('Cannot fetch product');
    
      if (!product) return <LoadingSpinner />; 


  return (
    <>
    <div>
      <div className="product-detail-container lg:justify-center">
        <div>
          <div className="">
          
            <Image
            
              src={urlFor(product.image && product.image[index]).url()}
              className="product-detail-image"
              alt="product_image"
              width={1024} height={572}
            />
          
          </div>
          <div className="small-images-container overflow-hidden">
            {product.image?.map((item, i) => (
              <Image
                width={50} height={50}
                key={i}
                src={urlFor(item).url()}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
                alt="image selector"
              />
            ))}
          </div>
        </div>
        <div className=" hidden xl:block ring-1 ring-gray-900 rounded-lg content-center">
          <Image src="/assets/map_maldives.jpg" className="p-2 rounded-lg  object-center" alt="map_maldives" width={240} height={780} />
          <div className="m-4 flex justify-center">
          <button id="btn_more" className="w-full rounded-lg p-1 px-5 py-2 ring-1  hover:bg-cyan-950 hover:text-white" >ABOUT MALDIVES</button>
          </div>
        </div>
        


        

         
      </div>

      <div className="bg-white mt-4 px-6 pb-8 pt-7 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg sm:px-10 lg:justify-center">
          <div className="">
            <div className="m-2">
              <span className="sm:text-2xl md:text-3xl">{product.name}</span>
            </div>
            <div className="divide-y divide-gray-300/50">
              <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    
                    <PiCheckCircleDuotone className="w-8 h-8 text-cyan-500"/>
                    
                    <p className="ml-4">
                      Location :
                      <span className="pl-4 text-md font-bold text-gray-900">
                        {product.location}
                      </span>
                    </p>
                  </li>
                  <li className="flex items-center">
                  <PiCheckCircleDuotone className="w-8 h-8 text-cyan-500"/>
                    <p className="ml-4">
                      Distance from Airport :
                      <span className="pl-4 text-md font-bold text-gray-900">
                        {product.airport_distance}
                      </span>
                    </p>
                  </li>
                  <li className="flex items-center">
                  <PiCheckCircleDuotone className="w-8 h-8 text-cyan-500"/>
                    <p className="ml-4">
                      Number of Rooms:
                      <span className="pl-4 text-md font-bold text-gray-900">
                        {product.no_of_rooms}
                      </span>
                    </p>
                  </li>
                </ul>
                <p>
                  {product.about}
                </p>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p className="text-gray-900">Want to more information?</p>
                {/* <p>
                  <a
                    href="https://tailwindcss.com/docs"
                    className="text-sky-500 hover:text-sky-600"
                  >
                    Read the docs &rarr;
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </div>

      <div className="shadow-xl ring-1 ring-gray-900 my-10 mt-20 bg-slate-100 mx-1">
            <div className="mx-1 p-8 justify-center text-lg sm:text-2xl">
              <p className="text-center">Available Room Types</p>
            </div>
            <div className="flex-wrap justify-center gap-3 sm:flex px-6 pb-8">
              <RoomType2 product={product} />
              
            </div>
      </div>

      <div className="shadow-xl ring-1 ring-gray-900 my-20 bg-slate-100 mx-1">
            <div className="mx-1 p-8 justify-center text-lg sm:text-2xl">
              <p className="text-center">Faciliteis</p>
            </div>
            <div className="flex-wrap justify-center gap-3 sm:flex px-6 pb-8">
              <Facilities facilities={facilities} />
             
            </div>
      </div>

      <div className="shadow-xl ring-1 ring-gray-900 my-20 bg-slate-100 mx-1 pb-10">
            <div className="mx-1 p-8 justify-center text-lg sm:text-2xl">
              <p className="text-center">House Rules</p>
            </div>
            {/* <div className="divide-y divide-gray-300/50">
              <div className="space-y-6 py-8 text-base flex justify-center leading-7 text-gray-600">
              </div>
              
            </div> */}
            <div className="flex flex-col justify-center lg:w-6/12 lg:mx-auto m-6">
               
              <div className=" ring-gray-200 ring-1 p-4">
                <ul>
                  <li className="flex items-center">
                  
                  <p>
                      <span className="text-md font-bold text-gray-900">
                      Check In :
                      </span>
                      <span className="pl-4 text-gray-900">
                        {product.check_in}
                      </span>
                    </p>
                  </li>
                  </ul>
                </div>

                <div className=" ring-gray-200 ring-1 p-4">
                <ul>
                  <li className="flex items-center">
                  
                  <p>
                      <span className="text-md font-bold text-gray-900 ">
                      Check Out :
                      </span>
                      <span className="pl-4 text-gray-900">
                        {product.check_out}
                      </span>
                    </p>
                  </li>
                  </ul>
                </div>

                <div className=" ring-gray-200 ring-1 p-4">
                <ul>
                  <li className="flex items-center">
                  <p>
                      <span className="text-md font-bold text-gray-900 ">
                      Cancellation Policy :
                      </span>
                      <span className="pl-4 text-gray-900">
                        {product.cancellation_policy}
                      </span>
                    </p>
                  </li>
                  </ul>
                </div>

                <div className=" ring-gray-200 ring-1 p-4">
                <ul>
                  <li className="flex items-center">
                  <p>
                      <span className="text-md font-bold text-gray-900 ">
                      Child Policy :
                      </span>
                      <span className="pl-4 text-gray-900">
                        {product.child_policy}
                      </span>
                    </p>
                  </li>
                  </ul>
                </div>

                <div className=" ring-gray-200 ring-1 p-4">
                <ul>
                  <li className="flex items-center">
                  <p>
                      <span className="text-md font-bold text-gray-900 ">
                      Age Restriction :
                      </span>
                      <span className="pl-4 text-gray-900">
                        {product.age_restriction}
                      </span>
                    </p>
                  </li>
                  </ul>
                </div>

                <div className=" ring-gray-200 ring-1 p-4">
                <ul>
                  <li className="flex items-center">
                  <p>
                      <span className="text-md font-bold text-gray-900 ">
                      Pets :
                      </span>
                      <span className="pl-4 text-gray-900">
                        {product.pets}
                      </span>
                    </p>
                  </li>
                  </ul>
                </div>
                
              
            </div>
      </div>
      
      <div className="shadow-xl ring-1 ring-gray-900 my-20 bg-slate-100 mx-1">
            <div className="mx-1 p-8 justify-center text-lg sm:text-2xl">
              <p className="text-center">The Fine Print</p>
            </div>
            <div className="flex flex-col justify-center lg:w-9/12 lg:mx-auto pb-10">
              <div className=" ring-gray-200 ring-1 p-10 sm:m-10">
                    <CustomPortableText
                    className="prose-lg"
                    value={product.fine_print?.length ? product.fine_print : ""}
                    />
              </div>
            </div>
      </div>


      <div className="shadow-xl ring-1 ring-gray-900 my-20  bg-slate-100 mx-1 pb-12">
            <div className="mx-1 p-8 justify-center text-lg sm:text-2xl">
              <p className="text-center">Frequently Asked Questions</p>
            </div>
            <div className="flex flex-col justify-center lg:w-9/12 lg:mx-auto pb-10">
            <div className=" ring-gray-200 ring-1 p-10 sm:m-10">
              <Faqs faqs={faqs}/>
             
            </div>
            </div>
      </div>
      

      
    </div>
    <div>
    {showCart && <BookingForm />}
    </div>
    
    </>
   
    
  )
}

export default ProductDetails