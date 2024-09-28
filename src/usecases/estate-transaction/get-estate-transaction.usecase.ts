// src/modules/api/v1/town-planning/estate-transaction/use-cases/estate-transaction.usecase.ts
import { Injectable } from '@nestjs/common';
import { IEstateTransactionRepository } from 'src/repositories/estate-transaction.repository';
import { GetEstateTransactionDto } from 'src/dto/get-estate-transaction.dto';

@Injectable()
export class GetEstateTransactionUseCase {
  constructor(private readonly repository: IEstateTransactionRepository) {}

  async execute(params: GetEstateTransactionDto): Promise<any> {
    // 必要に応じてビジネスロジックを追加
    return this.repository.getEstateTransactionData(params);
  }
}
