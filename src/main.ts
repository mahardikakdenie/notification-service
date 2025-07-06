import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: process.env.RABBITMQ_URLS
          ? [process.env.RABBITMQ_URLS]
          : ['amqp://guest:guest@localhost:5672'],
        queue: process.env.RABBITMQ_QUEUE_CONFIRMATION ?? '',
        noAck: false,
        queueOptions: {
          durable: true,
          arguments: {
            'x-queue-type': 'quorum',
          },
        },
      },
    },
  );
  await app.listen();
}
void bootstrap();
