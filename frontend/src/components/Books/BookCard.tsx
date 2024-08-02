import IBook from "../../interfaces/IBook.ts";

export default function BookCard(book: IBook) {
   return(
       <div
           key={book.id}
           className={`flex justify-evenly items-center w-full min-h-40 max-h-fit p-4 border border-neutral-800 bg-neutral-200`}
       >
           <div className={`pr-10`}>
               <img src={book.image_url} alt={`book image`} className={`w-40`}/>
           </div>

           <div className={`flex flex-wrap w-1/2`}>
               <div className={`flex flex-col`}>
                   <p className={`p-1 font-semibold text-lg text-slate-900`}>{book.name}</p>
                   <p className={`p-1 text-sm text-slate-800`}>Author(s): {book.author}</p>
                   {/*<p className={`p-1`}>Price: {book.price}</p>
                   <p className={`p-1`}>Quantity: {book.quantity}</p>
                   <p className={`p-1`}>Edition: {book.edition}</p>
                   <p className={`p-1`}>Publish: {book.dateOfPublish.map((d: string) => d)}</p>*/}
               </div>
           </div>

           <div className={`flex flex-wrap`}>
               <div className={`flex flex-col`}>
                   <p>Enter</p>
               </div>
           </div>
       </div>
   );
}

