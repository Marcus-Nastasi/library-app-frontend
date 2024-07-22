import { Request, Response } from "express";

export default class Login {

   static render(req: Request, res: Response) {
      res.render('pages/login.html');
   }
}

