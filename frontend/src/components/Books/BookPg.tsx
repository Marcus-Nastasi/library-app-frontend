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
      className={`flex justify-evenly items-center w-10/12 h-full p-4 border border-neutral-800 bg-neutral-200`}
      >
         <div className={`pr-10`}>
            <img src={book.image_url} alt={`book image`} className={`w-full`}/>
         </div>

         <div className={`flex flex-col flex-wrap w-1/2`}>
            <div className={`flex flex-col text-xl`}>
                  <p className={`p-1 pb-3 font-semibold text-slate-900 text-3xl`}>{book.name}</p>
                  <p className={`p-1 text-md text-slate-800`}>Author(s): {book.author}</p>
                  <p className={`p-1 font-light`}>Price: <span className=" font-bold">$ {book.price}</span></p>
                  <p className={`p-1 font-light`}>Quantity: <span className=" font-bold">{book.quantity}</span></p>
                  <p className={`p-1 font-light`}>Edition: <span className=" font-bold">{book.edition}</span></p>
                  <p className={`p-1 font-light`}>Publish: <span className=" font-bold">{date}</span></p>
                  <p className={`p-1 font-light`}>Type: <span className=" font-bold">{book.type}</span></p>
                  <p className={`p-1 font-light`}>Status: <span className=" font-bold">{book.status}</span></p>
            </div>

            <div className={`flex flex-wrap`}>
               <div className={`flex flex-row justify-center items-center`}>
                  <div className="mt-5 mr-5">
                     <Button
                        text={'Rent'} 
                        funct={() => window.open(`/rent?new=true&id=${book.id}`, '_self')} 
                     />
                  </div>
                  
                  <div className="mt-5 ml-5">
                     <Button
                        text={'Buy'} 
                        funct={null} 
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

