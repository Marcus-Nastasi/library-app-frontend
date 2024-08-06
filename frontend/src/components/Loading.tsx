import { FaSpinner } from 'react-icons/fa6';

export default function Loading() {
   return(
      <div className='absolute top-0 flex justify-center items-center w-screen h-screen bg-neutral-100'>
         <div className='loading'>
            <FaSpinner size={65} />
         </div>
      </div>
   );
}
