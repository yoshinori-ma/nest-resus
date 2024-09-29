import { Module } from '@nestjs/common';
import { EstateTransactionController } from 'src/controllers/estate-transaction/estate-transaction.controller';
import { GetEstateTransactionUseCase } from 'src/usecases/estate-transaction/get-estate-transaction.usecase';
import { IEstateTransactionRepositoryToken } from 'src/repositories/estate-transaction.repository';
import { EstateTransactionRepositoryImpl } from 'src/infrastructure/estate-transaction-repository-impl';
import { HttpModule } from '@nestjs/axios';
import { ResasApiService } from 'src/services/resas-api.service';

@Module({
  imports: [HttpModule],
  controllers: [EstateTransactionController],
  providers: [
    GetEstateTransactionUseCase,
    {
      provide: IEstateTransactionRepositoryToken,
      useClass: EstateTransactionRepositoryImpl,
    },
    ResasApiService,
  ],
})
export class EstateTransactionModule {}
