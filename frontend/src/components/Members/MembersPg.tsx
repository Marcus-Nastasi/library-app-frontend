import { useEffect, useState } from "react";
import Button from "../Button";
import IMember from "../../interfaces/IMember";

export default function MembersPg() {
   const [ members, setMembers ] = useState<Array<IMember>>();

   useEffect(() => {
      setMembers(mbm);
   }, [])

   const mbm: Array<IMember> = [
      {
         id: 1,
         name: 'Josh',
         cpf: "123.456.789-0",
         type: "STUDANT",
         date_of_membership: new Date(),
         books_issued: 1,
         books_limit: 2,
         phone: "11 92390293022"
      },
      {
         id: 2,
         name: 'Logan',
         cpf: "123.456.789-1",
         type: "STUDANT",
         date_of_membership: new Date(),
         books_issued: 1,
         books_limit: 2,
         phone: "11 92390293022"
      }
   ];

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
                           {String(m.date_of_membership)}
                        </td>
                        <td className=" border-2 p-3 border-slate-100">
                           {m.books_issued}
                        </td>
                        <td className=" border-2 p-3 border-slate-100">
                           {m.books_limit}
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

