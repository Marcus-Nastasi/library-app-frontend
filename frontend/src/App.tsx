import {useEffect, useState} from "react";

import BookCard from "./components/Books/BookCard";
import Cookie from "./lib/Cookie";
import IBook from "./interfaces/IBook.ts";

export default function App() {
   const [ books, setBooks ] = useState<Array<IBook> | undefined>();

   useEffect(() => {
      // fetching books
      const getAllBooks = async (): Promise<void> => {
         const url: string = 'http://localhost:8080/api/books/get';
         const token: string | null = Cookie.getCookie('libToken');
         if (token === null) window.open('/login', "_self");
         try {
            const request: Response = await fetch(url, {
               method: 'get',
               headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` })
            });
            const response: Array<IBook> = await request.json();
            setBooks(response);
         } catch(e: any) {
            console.log(e);
         }
      };
      getAllBooks();
   }, []);

   return (
      <div className={`flex flex-col justify-center items-center min-h-screen max-h-fit overflow-x-hidden`}>
         <div className="w-screen min-h-screen max-h-fit p-10 pt-1 flex flex-wrap justify-evenly items-center bg-neutral-100">
            <div className={`p-10`}>
               <input
                  type={'search'}
                  placeholder={'search books...'}
                  className={'p-0.5 px-10 border border-slate-950 focus:outline-none'}
                  style={{ textIndent: '5px' }}
               />
               <button
                  type={'button'}
                  className={`px-8 py-0.5 border border-neutral-800 bg-neutral-200 hover:bg-neutral-300`}
               >
                  Search
               </button>
            </div>

            { books && books.map((b: IBook) => <BookCard {...b} />) || 'loading...' }
         </div>
      </div>
   );
}

