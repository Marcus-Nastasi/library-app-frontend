import Button from "../Button";
import IMember from "../../interfaces/IMember";

export default function MembersPg({ members }: any) {
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

