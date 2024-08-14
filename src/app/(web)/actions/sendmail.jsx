'use server';

import { EmailTemp } from '@/components/EmailTemplate/MailTem';
import { Resend } from 'resend';

export async function send_mail_resend(mail_data) {

    const { resort_name, room_type, user_name, user_email, meal_plan, transfer, message, arrival_date, departure_date  } = mail_data;

    const resend = new Resend(process.env.RESEND_API_KEY);
      try {
        const { data, error } = await resend.emails.send({
        
          from: 'Website <gotmaldives@noreply.appeul.com>',
        to: ['nasrullaw74@gmail.com'],
        subject: 'Booking Request from website!',
        react: EmailTemp({ resort_name, room_type, user_name, user_email, meal_plan, transfer, message, arrival_date, departure_date }),
  
        });

      } catch (error) {
        // Handle errors
        console.log('error')
        console.error('Error sending email:', error);
    
        
      }

 // if (error) {
      //   return {msg: "Something went wrong! Please try again later.", error: error};
      // } 
    
      // return {msg: "Email sent successfully!", data: data};

   
   

    
   

  }