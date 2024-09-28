import { Test, TestingModule } from '@nestjs/testing';
import { EstateTransitionController } from './estate-transition.controller';

describe('EstateTransitionController', () => {
  let controller: EstateTransitionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstateTransitionController],
    }).compile();

    controller = module.get<EstateTransitionController>(EstateTransitionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
