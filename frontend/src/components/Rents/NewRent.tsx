import { FaX } from 'react-icons/fa6';
import Button from '../Button';

export default function NewRent() {
   return(
      <div className="absolute top-0 left-0 py-20 w-screen h-screen flex justify-center bg-slate-950 bg-opacity-75">

         <div className="w-8/12 h-fit flex flex-col justify-center items-center border border-slate-950 bg-neutral-300">
            <div className=' p-5 self-end'>
               <FaX size={30} />
            </div>

            <div className=' mb-14'>
               <form className=' flex flex-col justify-center'>
                  <label htmlFor="book">Book:</label>
                  <input className=' mb-5' type="text" name="book" id="book" />

                  <label htmlFor="librarian">Librarian:</label>
                  <input className=' mb-5' type="text" name="librarian" id="librarian" />

                  <label htmlFor="member">Member</label>
                  <input className=' mb-5' type="text" name="member" id="member" />

                  <Button text={'Enter'} funct={null} />
               </form>
            </div>
         </div>

      </div>
   );
}

