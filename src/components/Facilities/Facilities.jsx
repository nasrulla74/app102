import React from 'react';
// import { urlFor } from '../lib/client';

const Facilities = ({ facilities }) => {
      
  return (
    <>
            {facilities?.map((item, i) => (
                    <div key={i} className="flex gap-2 justify-between">
                        <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 m-2 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                          <div className="mt-px">{item}</div>
                        </div>
                  </div>
                  
            ))}
        
    </>

  )
}

export default Facilities