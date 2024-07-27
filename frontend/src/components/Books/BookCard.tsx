import IBook from "../interfaces/IBook.ts";

export default function BookCard(book: IBook) {
   return(
      <div
          key={book.id}
          className={`flex justify-between items-center w-full min-h-40 max-h-fit p-4 border border-neutral-800 bg-neutral-400`}
      >
          <div className={`pr-10`}>
              <img src={book.image_url} alt={`book image`} className={`w-28`} />
          </div>

          <div className={`flex justify-center w-1/2`}>
              <div className={`flex flex-col`}>
                  <p className={`p-1`}>Author: {book.author}</p>
                  <p className={`p-1`}>Name: {book.name}</p>
                  <p className={`p-1`}>Price: {book.price}</p>
                  <p className={`p-1`}>Quantity: {book.quantity}</p>
                  <p className={`p-1`}>Status: {book.status}</p>
                  <p className={`p-1`}>Type: {book.type}</p>
                  <p className={`p-1`}>Edition: {book.edition}</p>
                  <p className={`p-1`}>Publish: {book.dateOfPublish.map((d: string) => d)}</p>
              </div>
          </div>
      </div>
   );
}

