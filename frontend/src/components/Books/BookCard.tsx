import IBook from "../interfaces/IBook.ts";

export default function BookCard(book: IBook) {
   return(
      <div
          key={book.id}
          className={`flex justify-between items-center min-h-40 max-h-fit p-4 border border-neutral-800 bg-neutral-400`}
      >
          <div>
              <img src={book.image_url} alt={`book image`} className={`w-28`} />
          </div>

          <div className={`flex justify-center items-center`}>
              <div className={`flex flex-col`}>
                  <p className={`p-3`}>ID: {book.id}</p>
                  <p className={`p-3`}>Author: {book.author}</p>
                  <p className={`p-3`}>Name: {book.name}</p>
              </div>

              <div className={`flex flex-col`}>
                  <p className={`p-2`}>{book.price}</p>
                  <p className={`p-2`}>{book.quantity}</p>
                  <p className={`p-2`}>{book.status}</p>
                  <p className={`p-2`}>{book.type}</p>
                  <p className={`p-2`}>{book.edition}</p>
                  <p className={`p-2`}>{book.dateOfPublish.map((d: string) => d)}</p>
              </div>
          </div>
      </div>
   );
}

