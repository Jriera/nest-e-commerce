import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entitties/order.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
    controllers: [OrdersController],
    providers: [OrdersService],
    imports: [TypeOrmModule.forFeature([Order])],

})
export class OrdersModule {}
