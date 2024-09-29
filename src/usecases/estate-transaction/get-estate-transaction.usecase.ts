// src/modules/api/v1/town-planning/estate-transaction/use-cases/estate-transaction.usecase.ts
import { Inject, Injectable } from '@nestjs/common';
import {
  IEstateTransactionRepository,
  IEstateTransactionRepositoryToken,
} from 'src/repositories/estate-transaction.repository';
import { GetEstateTransactionDto } from 'src/dto/estate-transaction/get-estate-transaction.dto';

@Injectable()
export class GetEstateTransactionUseCase {
  constructor(
    @Inject(IEstateTransactionRepositoryToken)
    private readonly repository: IEstateTransactionRepository,
  ) {}

  async execute(params: GetEstateTransactionDto): Promise<any> {
    return this.repository.getEstateTransactionData(params);
  }
}
