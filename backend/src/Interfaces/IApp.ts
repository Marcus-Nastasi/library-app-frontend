import { Application } from "express";

export default interface IApp {
   app: Application,
   listen: Function
}

