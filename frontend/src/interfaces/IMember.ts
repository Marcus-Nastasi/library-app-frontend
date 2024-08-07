export default interface IMember {
   id?: number,
   name: string,
   cpf: string,
   type: string,
   date_of_membership: Date,
   books_issued: number,
   books_limit: number,
   phone: string
}

