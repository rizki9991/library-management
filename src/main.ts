import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Konfigurasi Swagger
    const config = new DocumentBuilder()
        .setTitle('Library API')
        .setDescription('API documentation for the Library application')
        .setVersion('1.0')
        .addTag('library')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap();
