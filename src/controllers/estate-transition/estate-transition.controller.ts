import { Controller, Get } from '@nestjs/common';

@Controller()
export class EstateTransitionController {
  @Get('bar')
  bar() {
    return 'bar';
  }
}
