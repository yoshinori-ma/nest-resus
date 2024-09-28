import { Module } from '@nestjs/common';
import { EstateTransitionModule } from 'src/modules/estate-transition.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    RouterModule.register([
      // townPlanningModule掘ってもいいかも
      {
        path: 'townPlanning/estateTransaction',
        module: EstateTransitionModule,
      },
    ]),
    EstateTransitionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
