import { Controller, Get } from '@nestjs/common';
import { GetEstateTransactionUseCase } from 'src/usecases/estate-transaction/get-estate-transaction.usecase';

@Controller()
export class EstateTransactionController {
  constructor(private readonly useCase: GetEstateTransactionUseCase) {}

  @Get('bar')
  getEstateTransaction() {
    return;
  }
}
