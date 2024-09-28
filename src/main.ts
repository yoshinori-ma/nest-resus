import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // api以外、もしくはv2の設定が必要になった場合、nest-router、もしくはRouterModule側で設定する
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
