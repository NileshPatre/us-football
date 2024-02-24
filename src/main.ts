import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { UnauthorizedException } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: function (origin, callback) {
      if (
        !origin ||
        configService.get('WHITE_LIST_URLS').indexOf(origin) !== -1
      ) {
        callback(null, true);
      } else {
        callback(new UnauthorizedException('Not allowed by CORS'));
      }
    },
  });
  const port = parseInt(configService.get('PORT'));
  await app.listen(port);
  console.log(`Application is listening on port ${port}`);
}
bootstrap();
