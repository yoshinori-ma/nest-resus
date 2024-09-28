import { Module } from '@nestjs/common';
import { EstateTransactionController } from 'src/controllers/estate-transaction/estate-transaction.controller';

@Module({
  controllers: [EstateTransactionController],
})
export class EstateTransitionModule {}
