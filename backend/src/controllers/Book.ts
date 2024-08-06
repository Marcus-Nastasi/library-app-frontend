import { Request, Response } from "express";

export default class Book {
   static render(req: Request, res: Response) {
      res.render('pages/book_card');
   }
}
