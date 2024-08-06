import { Request, Response } from "express";

export default class Rent {
   static render(req: Request, res: Response): void {
      res.render('pages/rent');
   }
}
