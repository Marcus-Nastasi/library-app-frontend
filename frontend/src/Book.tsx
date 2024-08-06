import { useEffect, useState } from "react";

import IBook from "./interfaces/IBook";
import Cookie from "./lib/Cookie";
import BookPg from "./components/Books/BookPg";

export default function Book() {
   const [ book, setBook ] = useState<IBook | null>();

   useEffect(() => {
      getBook();
   }, []);

   const getBook = async (): Promise<void> => {
      const url: string = `http://localhost:8080/api/books/get/${get_url_id()}`;
      const token: string | null = Cookie.getCookie('libToken');
      if (!token) window.open('/login', '_self');
      try {
         const request: Response = await fetch(url, {
            method: 'get',
            headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` })
         });
         const book: IBook = await request.json();
         setBook(book);
      }  catch(e: any) {
         console.log(e.message);
      }    
   };

   const get_url_id = (): number => Number(window.location.href.split('/')[4]);

   return(
      <>
         { book && <BookPg book={book} /> || 'loading...' }
      </>      
   );
}

