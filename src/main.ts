import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS fuer das Angular-Frontend (laeuft auf einem anderen Port)
  app.enableCors({
    origin: ['http://localhost:4200'],
    credentials: true,
  });

  //swagger config
  const config = new DocumentBuilder()
    .setTitle('Campus Manager')
    .setDescription('Campus Manager')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  //create swagger document
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
