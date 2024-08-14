import * as React from 'react';

// interface EmailTempProps {
//   firstName: string;
// }

export const EmailTemp = ({
  resort_name, room_type, user_name, user_email, meal_plan, transfer, message, arrival_date, departure_date
}) => (
  <div className='overflow-x-auto max-w-[340px] rounded-lg mx-auto md:max-w-full shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th className='px-6 py-8'>Booking request from website!</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='px-6 py-4'>Destination</td>
            <td className='px-6 py-4'>{resort_name}</td>
          </tr>
          <tr>
            <td className='px-6 py-4'>Room Type</td>
            <td className='px-6 py-4'>{room_type}</td>
          </tr>
          <tr>
            <td className='px-6 py-4'>Arrival Date</td>
            <td className='px-6 py-4'>{arrival_date}</td>
          </tr>
          
          <tr>
            <td className='px-6 py-4'>Departure Date</td>
            <td className='px-6 py-4'>{departure_date}</td>
          </tr>
          
          <tr>
            <td className='px-6 py-4'>Meal Plan</td>
            <td className='px-6 py-4'>{meal_plan}</td>
          </tr>
          <tr>
            <td className='px-6 py-4'>Transfer By</td>
            <td className='px-6 py-4'>{transfer}</td>
          </tr>
          <tr>
            <td className='px-6 py-4'>Request from</td>
            <td className='px-6 py-4'>{user_name}</td>
          </tr>
          <tr>
            <td className='px-6 py-4'>Request Email</td>
            <td className='px-6 py-4'>{user_email}</td>
          </tr>
          <tr>
            <td className='px-6 py-4'>Message</td>
            <td className='px-6 py-4'>{message}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
);