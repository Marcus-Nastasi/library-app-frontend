import { useEffect, useState } from "react";

import iBook from "./components/interfaces/iBook";
import BookCard from "./components/Books/BookCard";
import Cookie from "./lib/Cookie";

export default function App() {
   const [ books, setBooks ] = useState<Array<iBook>>();

   useEffect(() => {
      // books fetch
      const getAllBooks = async (): Promise<void> => {
         const url: string = 'http://localhost:8080/api/books/get';
         const token: string | null = Cookie.getCookie('libToken');
         if (token == null) window.open('/login', "_self");
         try {
            const request: Response = await fetch(url, {
               method: 'get',
               headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` })
            });
            const response: Array<iBook> = await request.json();
            setBooks(response);
         } catch(e: any) {
            console.log(e);
         }
      };
      getAllBooks();
   }, []);

   return (
      <>
         <div className="w-11/12 min-h-screen max-h-fit flex flex-wrap justify-center items-center">
            { books && books.map((b: iBook) => <BookCard {...b} />) || 'loading...' }
         </div>
      </>
   )
}



