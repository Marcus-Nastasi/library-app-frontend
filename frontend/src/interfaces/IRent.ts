export default interface IRent {
   id?: number,
   book_id: number,
   emit_date: Date,
   return_date: Date,
   librarian_id: string,
   member_id: number
}

