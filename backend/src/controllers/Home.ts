import { Request, Response } from "express";

export default class HomeController {

   static renderHome(req: Request, res: Response) {
      res.render('index.html');
   }
}


