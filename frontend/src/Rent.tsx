import { useEffect, useState } from "react";
import Button from "./components/Button";
import RentsTable from "./components/Rents/RentsTable";
import IRent from "./interfaces/IRent";
import NewRent from "./components/Rents/NewRent";

export default function Rent() {
   const [ bookId, setBookId ] = useState<string>();
   const [ newRent, setNewRent ] = useState<string>('hidden');
   const [ url, setUrl ] = useState<string>();

   useEffect(() => {
      if (HandleViewNewRent.getNewRent() == 'true') setNewRent('');
      setBookId(getBookId());
   });

   class HandleViewNewRent {

      static getNewRent = (): string => window.location.href.split('?')[1].split('&')[0].split('=')[1];

      static close = (): void | false => {
         const url: string = window.location.href.replace('new=true', 'new=false');
         window.open(url, '_self');
      }

      static open = () => {
         const url: string = window.location.href.replace('new=false', 'new=true');
         window.open(url, '_self');
      }

      static handleUrlViewChange = (): void => {
         const originalUrl = window.location.href;
         if (originalUrl.split('?')[1].split('&')[0].match(/['new=true']/g)) {
            setUrl(originalUrl.replace('new=true', 'new=false'));
            url ? window.location.href = url : null;
            url ? window.history.replaceState({}, '', url.replace('new=true', 'new=false')) : null;
            url ? console.log(url) : console.log('erro 1')
            return
         }
      }
   }

   const getBookId = (): string => window.location.href.split('?')[1].split('&')[1].split('=')[1];

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
               bkId={bookId} 
               closeFunct={HandleViewNewRent.close} 
            />
         </div>

         <div className=" pb-20">
            <Button 
               text={'New'}
               funct={HandleViewNewRent.open}
            />
         </div>

         <div className=" flex justify-center">
            <RentsTable rent={rnt} />
         </div>
      </div>
   );
}

