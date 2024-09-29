import { Module } from '@nestjs/common';
import { EstateTransactionModule } from 'src/modules/estate-transaction.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    RouterModule.register([
      // townPlanningModule掘ってもいいかも
      {
        path: 'townPlanning/estateTransaction',
        module: EstateTransactionModule,
      },
    ]),
    EstateTransactionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
