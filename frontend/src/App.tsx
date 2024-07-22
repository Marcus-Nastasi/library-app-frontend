import { useEffect, useState } from "react";

function App() {
   const [ books, setBooks ] = useState<Array<object>>();

   useEffect(() => {

      // create books fetch
      const getAllBooks = async () => {
         const url = 'http://localhost:8080/api/books/get';

         const token = getCookie('libToken');

         try {

            const request: Response = await fetch(url, {
               method: 'get',
               headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` })
            });

            const response = await request.json();

            setBooks(response);

         } catch(e: any) {
            console.log(e);
         }
      };

      getAllBooks();

      function getCookie(name: string): string | null {
         var nameEQ = name + "=";
         var ca = document.cookie.split(';');
         for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length); // Remove espaços em branco no início
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
         }
         return null;
      }

   }, []);

  return (
    <>
      <div className="">
         
         { books ? books.map((b: any) => <img src={b.image_url} />) : '' }

      </div>
    </>
  )
}

export default App;


