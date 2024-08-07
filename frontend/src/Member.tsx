import { useEffect, useState } from "react";
import Button from "./components/Button";
import MembersPg from "./components/Members/MembersPg";
import IMember from "./interfaces/IMember";
import Cookie from "./lib/Cookie";

export default function Member() {
   const [ members, setMembers ] = useState<Array<IMember>>();
   const [ isMembers, setIsMembers ] = useState<boolean>();
   const [ searchedMembers, setSearchedMembers ] = useState<Array<IMember>>();
   const [ isSearchedMembers, setIsSearchedMembers ] = useState<boolean>();

   useEffect(() => {
      getMembers();
   }, [])

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
         setIsSearchedMembers(false);
         setIsMembers(true);
         return
      } catch(e: any) {
         console.log(e);
      }
   };

   const searchMembers = async (): Promise<void> => {
      const url: string = 'http://localhost:8080/api/members/search';
      const token: string | null = Cookie.getCookie('libToken');
      if (token === null) window.open('/login', '_self');
      const str: any = document.getElementById('search');
      try {
         const request: Response = await fetch(url, {
            method: 'post',
            body: JSON.stringify({ data: str.value }),
            headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` })
         });
         const response: Array<IMember> = await request.json();
         setSearchedMembers(response);
         setIsMembers(false);
         setIsSearchedMembers(true);
         return
      } catch(e: any) {
         console.log(e);
      }
   };

   return(
      <div className="flex justify-center">
         <div className="flex flex-col items-center p-20">
            <h2 className="text-4xl font-bold pb-20">
               Members
            </h2>

            <div className={`pb-10`}>
               <input
                  id="search"
                  type={'search'}
                  placeholder={'search members...'}
                  className={'p-0.5 px-5 mr-2 border-t-2 border-l-2 border-r-2 border-b-2 border-t-neutral-400 border-l-neutral-400 border-b-neutral-800 border-r-neutral-600 focus:outline-none'}
                  style={{ textIndent: '0px' }}
               />

               <Button
                  text={'Search'}
                  funct={searchMembers}
               />
            </div>

            <div className="pb-20">
               <Button 
                  text={'New'}
                  funct={null}
               />
            </div>

            {
               isMembers && <MembersPg members={isMembers && members} />
               || isSearchedMembers && <MembersPg members={isSearchedMembers && searchedMembers} />
            }
         </div>
      </div>
   );
}

