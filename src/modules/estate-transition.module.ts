import { Module } from '@nestjs/common';
import { EstateTransitionController } from 'src/controllers/estate-transition/estate-transition.controller';

@Module({
  controllers: [EstateTransitionController],
})
export class EstateTransitionModule {}
