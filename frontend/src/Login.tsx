import { CSSProperties } from "react";

export default function Login() {

   const handleLogin = async (e: any) => {
      e.preventDefault();

      const url = `http://localhost:8080/api/auth/login`;
      const [ cpf, password ]: any = [ document.getElementById('cpf'), document.getElementById('password') ];

      try {

         const request: Response = await fetch(url, {
            method: 'post',
            body: JSON.stringify({ cpf: cpf.value, password: password.value }),
            headers: new Headers({ 'Content-Type': 'application/json' })
         });

         const parsed = await request.json();

         document.cookie = `libToken=${parsed.data[0].token}; ${getCookieExpirationString(7)}; path=/ `;
         document.cookie = `cpf=${parsed.data[0].cpf}; ${getCookieExpirationString(7)}; path=/`;

         window.open('/', '_self');

      } catch(e: any) {
         console.log(e.message);
      }
   };

   function getCookieExpirationString(days: number): string {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = "expires=" + date.toUTCString();
      return expires;
   }

   return(
      <div className="min-h-screen max-h-fit w-screen flex justify-center items-center">

         <form className="flex flex-col justify-center items-center h-96 w-5/12 bg-neutral-300">

            <h2 className="mb-8 font-bold text-3xl">
               Login
            </h2>

            <div className=" flex flex-col w-fit">
               <label htmlFor="cpf">CPF:</label>
               <input 
                  className="mb-8 px-1 indent-1 focus:outline-none" 
                  type="text" 
                  name="cpf" 
                  id="cpf" 
                  placeholder="CPF..." 
               />

               <label htmlFor="password">Password:</label>
               <input 
                  className="mb-8 px-1 focus:outline-none" 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="password..." 
               />

               <button
                  onClick={handleLogin}
                  style={btnStyle} 
                  className="w-fit mt-1 px-8 py-0.5 self-center bg-neutral-300 hover:bg-neutral-200"
               >
                  Enter
               </button>
            </div>

         </form>

      </div>
   );
}

const btnStyle: CSSProperties = {
   boxShadow: '3px 3px 2px 0.2px',
   border: '1.7px solid black'
};



