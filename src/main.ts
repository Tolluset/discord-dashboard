import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60 * 1000 * 60 * 24,
      },
    }),
  );

  try {
    await app.listen(process.env.PORT);
    console.log(`Running on PORT ${process.env.PORT}`);
  } catch (e) {
    console.log(e);
  }
}
bootstrap();
