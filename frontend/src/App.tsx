import { useEffect, useState } from "react";

import BookCard from "./components/Books/BookCard";
import Cookie from "./lib/Cookie";
import IBook from "./components/interfaces/IBook.ts";

export default function App() {
   const [ books, setBooks ] = useState<Array<IBook>>();

   useEffect(() => {
      // fetching books
      const getAllBooks = async (): Promise<void> => {
         const url: string = 'http://localhost:8080/api/books/get';
         const token: string | null = Cookie.getCookie('libToken');
         if (token == null) window.open('/login', "_self");
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
      <div className={`flex justify-center items-center w-screen min-h-screen max-h-fit overflow-x-hidden`}>
         <div className="w-screen min-h-screen max-h-fit p-10 flex flex-wrap justify-evenly items-center bg-neutral-300">
            {
               books
               && books.map((b: IBook) => <BookCard {...b} />)
               || 'loading...'
            }
         </div>
      </div>
   );
}

