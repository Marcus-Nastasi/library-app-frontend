import iBook from "../interfaces/iBook";

export default function BookCard(book: iBook) {
   return(
      <div key={book.id}>
         <p>{book.id}</p>
         <p>{book.author}</p>
         <p>{book.name}</p>
         <p>{book.price}</p>
         <p>{book.quantity}</p>
         <img src={book.image_url} alt="" />
         <p>{book.status}</p>
         <p>{book.type}</p>
         <p>{book.edition}</p>
         <p>{book.dateOfPublish.map((d: string) => d) }</p>
      </div>
   );
}


