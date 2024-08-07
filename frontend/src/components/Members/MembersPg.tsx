import { useEffect, useState } from "react";
import Button from "../Button";
import IMember from "../../interfaces/IMember";
import Cookie from "../../lib/Cookie";

export default function MembersPg() {
   const [ members, setMembers ] = useState<Array<IMember>>();

   useEffect(() => {
      getMembers();
   }, []);

   const getMembers = async (): Promise<void> => {
      const url: string = 'http://localhost:8080/api/members/get';
      const token: string | null = Cookie.getCookie('libToken');
      if (token === null) window.open('/login', '_self');
      try {
         const request: Response = await fetch(url, {
            method: 'get',
            headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` })
         });
         const response: Array<IMember> = await request.json();
         setMembers(response);
         return
      } catch(e: any) {
         console.log(e);
      }
   }

   return(
      <table className="w-10/12 h-2/6 border-4 border-neutral-400 text-slate-900 bg-neutral-300">
         <thead>
            <th>
               <td className=" p-5 px-20">id</td>
            </th>
            <th>
               <td className=" p-5 px-20">name</td>
            </th>
            <th>
               <td className=" p-5 px-20">cpf</td>
            </th>
            <th>
               <td className=" p-5 px-20">member since</td>
            </th>
            <th>
               <td className=" p-5 px-20">issued</td>
            </th>
            <th>
               <td className=" p-5 px-20">limit</td>
            </th>
            <th>
               <td className=" p-5 px-20">phone</td>
            </th>
            <th><td></td></th>
         </thead>

         <tbody className=" text-center">
            {
               members ? members.map((m: IMember) => {
                  return(
                     <tr key={m.id}>
                        <td className=" border-2 p-3 border-slate-100">
                           {m.id}
                        </td>
                        <td className=" border-2 p-3 border-slate-100">
                           {m.name}
                        </td>
                        <td className=" border-2 p-3 border-slate-100">
                           {m.cpf}
                        </td>
                        <td className=" border-2 p-3 border-slate-100">
                           {String(m.dateOfMembership)}
                        </td>
                        <td className=" border-2 p-3 border-slate-100">
                           {m.booksIssued}
                        </td>
                        <td className=" border-2 p-3 border-slate-100">
                           {m.booksLimit}
                        </td>
                        <td className=" border-2 p-3 border-slate-100">
                           {m.phone}
                        </td>
                        <td className=" border-2 p-3 text-neutral-950 border-slate-100">
                           <Button text={'Enter'} />
                        </td>
                     </tr> 
                  );
               }) : ''
            }            
         </tbody>
      </table>
   );
}

