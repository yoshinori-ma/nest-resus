import { Module } from '@nestjs/common';
import { AppController } from 'src/controllers/app.controller';
import { AppService } from '../services/app.service';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
