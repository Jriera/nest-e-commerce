import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entitties/order.entity';

@Injectable()
export class OrdersService {

    constructor(
        @InjectRepository(Order) private readonly orderRepository: Repository<Order>,
      ) {}

      findAll() {
        return this.orderRepository.find();
    }

    findOne(id: string) {
        const user = this.orderRepository.findOne(id);

        if(!user) {
            throw new NotFoundException(`User with id "${id}" not found`);
        } else{
            return user;
        }
    }

    findByUserId(userId: string) {
        return this.orderRepository.find({
            where: {
                userId: userId,
            },
        });
    }

    create(createOrderDto: CreateOrderDto) {
        const order = this.orderRepository.create(createOrderDto);
        return this.orderRepository.save(order);

    }

    async update(id: string, updateUserDto: UpdateOrderDto) {
        const user = await this.orderRepository.preload({ 
            id: +id,
            ...updateUserDto,});
            if(!user) {
                throw new NotFoundException(`User with id "${id}" not found`);
            }else{
                return this.orderRepository.save(user);
            }
    }

    delete(id: string) {
        const user = this.orderRepository.findOne(id);
        if(!user) {
            throw new NotFoundException(`User with id "${id}" not found`);
        } else{
            return this.orderRepository.delete(id);
        }
    }

}
