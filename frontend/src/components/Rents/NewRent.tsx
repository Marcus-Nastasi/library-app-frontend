import { FaX } from 'react-icons/fa6';
import Button from '../Button';
import { useEffect, useState } from 'react';
import Cookie from '../../lib/Cookie';

export default function NewRent({ bkId, closeFunct }: any) {
   const [ librarianId, setLibrarianId ] = useState<string | null>();
   const [ bookId, setBookId ] = useState<string>();

   useEffect(() => {
      setLibrarianId(Cookie.getCookie('librarian_id'));
      bkId && setBookId(bkId);
   });

   return(
      <div className="absolute top-0 left-0 py-20 w-screen h-screen flex justify-center bg-slate-950 bg-opacity-75">

         <div className="w-8/12 h-fit flex flex-col justify-center items-center border border-slate-950 bg-neutral-300">
            <div className=' p-5 self-end'>
               <FaX size={30} onClick={closeFunct} />
            </div>

            <div className=' mb-14'>
               <form className=' flex flex-col justify-center'>
                  <label htmlFor="book_id">Book:</label>
                  <input 
                     className=' mb-5' 
                     type="text" 
                     name="book_id" 
                     id="book_id" 
                     value={bookId && bookId} 
                      
                  />

                  <label htmlFor="librarian_id">Librarian:</label>
                  <input className=' mb-5' type="text" name="librarian_id" id="librarian_id" value={String(librarianId)} />

                  <div className='flex justify-between'>
                     <label htmlFor="member_id">Member</label> 
                     <a
                        onClick={() => window.open('/members')} 
                        className=' text-blue-500 hover:text-blue-800 hover:cursor-pointer'
                     >
                        find member
                     </a>
                  </div>

                  <input className=' mb-5' type="text" name="member_id" id="member_id" />

                  <Button text={'Enter'} funct={null} />
               </form>
            </div>
         </div>

      </div>
   );
}

