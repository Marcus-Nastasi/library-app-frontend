import { useEffect, useState } from "react";

import BookCard from "./components/Books/BookCard";
import Cookie from "./lib/Cookie";
import IBook from "./components/interfaces/IBook.ts";

export default function App() {
   const [ books, setBooks ] = useState<IBook>();

   useEffect(() => {
      // books fetch
      const getAllBooks = async (): Promise<void> => {
         const url: string = 'http://localhost:8080/api/books/get/21';
         const token: string | null = Cookie.getCookie('libToken');
         if (token == null) window.open('/login', "_self");
         try {
            const request: Response = await fetch(url, {
               method: 'get',
               headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` })
            });
            const response: IBook = await request.json();
            setBooks(response);
         } catch(e: any) {
            console.log(e);
         }
      };
      getAllBooks();
   }, []);

   return (
      <>
         <div className="w-screen lg:w-11/12 min-h-screen max-h-fit flex flex-wrap justify-center items-center">
            {/* books && books.map((b: IBook) => <BookCard {...b} />) || 'loading...'*/ }

            { books ? <BookCard {...books} /> : 'loading...' }
         </div>
      </>
   )
}

