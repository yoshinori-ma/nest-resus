import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IEstateTransactionRepository } from '../repositories/estate-transaction.repository';
import { GetEstateTransactionDto } from 'src/dto/estate-transaction/get-estate-transaction.dto';
import { AxiosResponse } from 'axios';
import { ResasApiService } from 'src/services/resas-api.service';

@Injectable()
export class EstateTransactionRepositoryImpl
  implements IEstateTransactionRepository
{
  constructor(
    private readonly httpService: HttpService,
    private readonly resasApiService: ResasApiService,
  ) {}

  async getEstateTransactionData(
    params: GetEstateTransactionDto,
  ): Promise<AxiosResponse<any>> {
    return this.resasApiService.getEstateTransactionData(params);
  }
}
