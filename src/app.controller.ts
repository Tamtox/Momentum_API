import { Controller, Get } from "@nestjs/common";

@Controller("app")
export class AppController {
  @Get()
  getApp() {
    return "Momentu API is running!";
  }
}
