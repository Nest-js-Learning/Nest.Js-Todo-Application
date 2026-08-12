import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entity/user.entity';

@Module({
  imports: [
    // Load .env variables
    // This is required so env can be used globally
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Database configuration

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],

      useFactory: (configService: ConfigService) => ({
        type: 'postgres',

        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),

        autoLoadEntities: true,
        entities: [Todo],
        synchronize: true, // Development only
      }),

      inject: [ConfigService],
    }),

    TodoModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}