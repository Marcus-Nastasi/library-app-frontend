import { Request, Response } from "express";

export default class Member {
   static render(req: Request, res: Response): void {
      res.render('pages/member');
   }
}
