import { Request, Response } from "express";

class HomeController{

  public home(req:Request, res:Response) {
    return res.json({
      response: 'Daniel do back esteve aqui'
    });
  }

  
}
export const homeController = new HomeController();