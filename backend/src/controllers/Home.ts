import { Request, Response } from "express";

export default class HomeController {

   static renderHome(req: Request, res: Response): void {
      return res.render('index.html');
   }
}

