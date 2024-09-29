import { Controller, Get, Query } from '@nestjs/common';
import { GetEstateTransactionDto } from 'src/dto/estate-transaction/get-estate-transaction.dto';
import { GetEstateTransactionUseCase } from 'src/usecases/estate-transaction/get-estate-transaction.usecase';

@Controller()
export class EstateTransactionController {
  constructor(private readonly useCase: GetEstateTransactionUseCase) {}

  @Get('bar')
  getEstateTransaction(@Query() query: GetEstateTransactionDto) {
    return this.useCase.execute(query);
  }
}
