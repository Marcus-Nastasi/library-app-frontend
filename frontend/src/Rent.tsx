import { useEffect, useState } from "react";
import Button from "./components/Button";
import RentsTable from "./components/Rents/RentsTable";
import IRent from "./interfaces/IRent";
import NewRent from "./components/Rents/NewRent";

export default function Rent() {
   const [ bookId, setBookId ] = useState<string | null>();
   const [ newRent, setNewRent ] = useState<string>('hidden');

   useEffect(() => {
      if (HandleViewNewRent.getNewRent() == 'true') setNewRent('');
      if (window.location.href.match(/['id']/g)) {
         setBookId(getBookId());
      };
   });

   class HandleViewNewRent {

      static getNewRent = (): string | null => {
         if (!window.location.href.match(/['id']/g)) return window.location.href.split('?')[1].split('=')[1];
         return window.location.href.split('?')[1].split('&')[0].split('=')[1];
      }

      static close = (): void | false => {
         const url: string = window.location.href.replace('new=true', 'new=false');
         window.open(url, '_self');
      }

      static open = () => {
         const url: string = window.location.href.replace('new=false', 'new=true');
         window.open(url, '_self');
      }
   }

   const getBookId = (): string | null => {
      if (!window.location.href.match(/['id']/g)) return null;
      return window.location.href.split('?')[1].split('&')[1].split('=')[1];
   }

   const rnt: Array<IRent> = [
      {
         id: 1,
         book_id: 3,
         emit_date: new Date(),
         return_date: new Date(),
         librarian_id: 'mksdcmkdscmksdmcksd',
         member_id: 1
      },
      {
         id: 1,
         book_id: 3,
         emit_date: new Date(),
         return_date: new Date(),
         librarian_id: 'mksdcmkdscmksdmcksd',
         member_id: 1
      }
   ];

   return(
      <div className="w-screen min-h-screen max-h-fit flex flex-col items-center bg-neutral-100">
         <div className=" p-20">
            <h2 className=" text-4xl font-bold">
               Rents
            </h2>
         </div>

         <div className={`${newRent}`}>
            <NewRent 
               bkId={bookId && bookId} 
               closeFunct={HandleViewNewRent.close} 
            />
         </div>

         <div className="pb-20">
            <Button 
               text={'New'}
               funct={HandleViewNewRent.open}
            />
         </div>

         <div className="flex justify-center">
            <RentsTable rent={rnt} />
         </div>
      </div>
   );
}

