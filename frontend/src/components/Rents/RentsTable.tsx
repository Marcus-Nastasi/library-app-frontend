import IRent from "../../interfaces/IRent";
import Button from "../Button";

export default function RentsTable({ rent }: any) {
   return(
      <table className="w-10/12 h-2/6 border-4 border-neutral-400 text-slate-900 bg-neutral-300">
         <thead>
            <th>
               <td className=" p-5 px-20">id</td>
            </th>
            <th>
               <td className=" p-5 px-20">book</td>
            </th>
            <th>
               <td className=" p-5 px-20">emit</td>
            </th>
            <th>
               <td className=" p-5 px-20">return</td>
            </th>
            <th>
               <td className=" p-5 px-20">librarian</td>
            </th>
            <th>
               <td className=" p-5 px-20">member</td>
            </th>
            <th><td></td></th>
         </thead>

         <tbody className=" text-center">
            {
               rent ? rent.map((r: IRent) => {
                  return(
                     <tr key={r.id}>
                        <td className=" border-2 p-3 border-slate-100">
                           {r.id}
                        </td>
                        <td className=" border-2 p-3 border-slate-100">
                           {r.book_id}
                        </td>
                        <td className=" border-2 p-3 border-slate-100">
                           {String(r.emit_date)}
                        </td>
                        <td className=" border-2 p-3 border-slate-100">
                           {String(r.return_date)}
                        </td>
                        <td className=" border-2 p-3 border-slate-100">
                           {r.librarian_id}
                        </td>
                        <td className=" border-2 p-3 border-slate-100">
                           {r.member_id}
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

