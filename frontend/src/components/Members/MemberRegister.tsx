import { useEffect, useState } from "react";
import { FaX } from "react-icons/fa6";
import Button from "../Button";
import Cookie from "../../lib/Cookie";
import IMember from "../../interfaces/IMember";
import Loading from "../Loading";

export default function MemberRegister({ close }: any) {
   const [ loading, setLoading ] = useState<boolean>();
   const [ name, setName ] = useState<string>();
   const [ cpf, setCpf ] = useState<string>();
   const [ type, setType ] = useState<any>();
   const [ phone, setPhone ] = useState<string>();

   useEffect(() => {
      setType('REGULAR');
   }, []);

   const handleSubmit = async (e: any): Promise<void> => {
      e.preventDefault();
      const url: string = 'http://localhost:8080/api/members/register';
      const token: string | null = Cookie.getCookie('libToken');
      if (token === null) window.open('/login', '_self');
      setLoading(true);
      try {
         const request: Response = await fetch(url, {
            method: 'post',
            body: JSON.stringify({ name: name, cpf: cpf, type: type, booksIssued: 0, booksLimit: 1, phone: phone }),
            headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` })
         });
         const response: IMember = await request.json();
         console.log(response);
         setLoading(false);
         return
      } catch(e: any) {
         console.log(e);
      }
   };

   return(
      <div className="absolute top-0 left-0 py-20 w-screen h-screen flex justify-center bg-slate-950 bg-opacity-75">
         { loading && <Loading /> }

         <div className="w-8/12 h-5/6 flex flex-col justify-center items-center border border-slate-950 bg-neutral-300">
            <div className='relative top-0 p-5 self-end'>
               <FaX size={30} onClick={close} />
            </div>

            <div className='mb-14'>
               <form className=' flex flex-col justify-center'>
                  <label htmlFor="name">Name:</label>
                  <input 
                     type="text" 
                     name="name" 
                     id="name" 
                     placeholder="Name..." 
                     value={name} 
                     onChange={(e) => setName(e.target.value)} 
                  />

                  <label htmlFor="cpf">Cpf:</label>
                  <input 
                     type="text" 
                     name="cpf" 
                     id="cpf" 
                     placeholder="cpf..."
                     value={cpf}
                     onChange={(e) => setCpf(e.target.value)} 
                  />

                  <label htmlFor="type">Type:</label>
                  <select id="type" name="type" onChange={ (e) => setType(e.target.value) } >
                     <option value="REGULAR">REGULAR</option>
                     <option value="STUDENT">STUDENT</option>
                  </select>

                  <label htmlFor="phone">Phone</label>
                  <input 
                     type="tel" 
                     name="phone" 
                     id="phone" 
                     placeholder="phone..." 
                     value={phone}
                     onChange={(e) => setPhone(e.target.value)}
                  />

                  <Button text={'Enter'} funct={handleSubmit} />
               </form>
            </div>
         </div>
      </div>
   );
}

