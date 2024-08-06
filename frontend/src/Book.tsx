import { useEffect, useState } from "react";

import IBook from "./interfaces/IBook";
import Cookie from "./lib/Cookie";
import BookPg from "./components/Books/BookPg";
import ErrorBox from "./components/Handlers/ErrorBox";

export default function Book() {
   const [ book, setBook ] = useState<IBook | null>();
   const [ error, setError ] = useState<boolean>();
   const [ errorMsg, setErrorMsg ] = useState<string>();

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
         if (request.status === 204) {
            setError(true);
            setErrorMsg('No content avaliable');
            return
         }
         if (request.status !== 200) {
            setError(true);
            setErrorMsg(String(request.status));
            return
         }
         const book: IBook = await request.json();
         setBook(book);
      }  catch(e: any) {
         console.log(e.message);
      }    
   };

   const get_url_id = (): number => Number(window.location.href.split('/')[4]);

   return(
      <div className=" flex justify-center items-center py-10 h-screen">
         { error && <ErrorBox msg={errorMsg} /> }
         {/* <ErrorBox msg={'mensagem de erro bla bla bla'} /> */}
         { book && <BookPg book={book} /> || 'loading...' }
      </div>      
   );
}

