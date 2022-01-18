import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsersModule, OrdersModule,TypeOrmModule.forRoot(
    {
      type:"postgres",
      host:"20.121.80.229",
      port:5432,
      username:"postgres",
      password:"pass123",
      database:"postgres",
      autoLoadEntities:true,
      synchronize:true
      
      
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
