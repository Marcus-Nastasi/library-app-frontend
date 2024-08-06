import { useEffect, useState } from "react";
import Button from "../Button";

export default function BookPg({ book }: any) {
   const [ date, setDate ] = useState<string>();

   useEffect(() => {
      setDate((): string => `${book.dateOfPublish[2]}/${book.dateOfPublish[1]}/${book.dateOfPublish[0]}`);
   }, []);

   return(
      <div
      key={book.id}
      className={`flex justify-evenly items-center w-full min-h-screen max-h-fit p-4 border border-neutral-800 bg-neutral-200`}
      >
         <div className={`pr-10`}>
            <img src={book.image_url} alt={`book image`} className={`w-full`}/>
         </div>

         <div className={`flex flex-wrap w-1/2`}>
            <div className={`flex flex-col`}>
                  <p className={`p-1 font-semibold text-lg text-slate-900`}>{book.name}</p>
                  <p className={`p-1 text-sm text-slate-800`}>Author(s): {book.author}</p>
                  <p className={`p-1 font-light`}>Price: <span className=" font-bold">$ {book.price}</span></p>
                  <p className={`p-1 font-light`}>Quantity: <span className=" font-bold">{book.quantity}</span></p>
                  <p className={`p-1 font-light`}>Edition: <span className=" font-bold">{book.edition}</span></p>
                  <p className={`p-1 font-light`}>Publish: <span className=" font-bold">{date}</span></p>
                  <p className={`p-1 font-light`}>Type: <span className=" font-bold">{book.type}</span></p>
                  <p className={`p-1 font-light`}>Status: <span className=" font-bold">{book.status}</span></p>
            </div>
         </div>

         <div className={`flex flex-wrap`}>
            <div className={`flex flex-col justify-center items-center`}>
               <div className=" my-5">
                  <Button
                     text={'Rent'} 
                     funct={null} 
                  />
               </div>
               
               <div className=" my-5">
                  <Button
                     text={'Buy'} 
                     funct={null} 
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

