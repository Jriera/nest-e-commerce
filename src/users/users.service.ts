import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
      ) {}

    findAll() {
        return this.userRepository.find();
    }

    findOne(id: string) {
        const user = this.userRepository.findOne(id);

        if(!user) {
            throw new NotFoundException(`User with id "${id}" not found`);
        } else{
            return user;
        }
    }

    findByUserId(uid: string) {
        return this.userRepository.find({
            where: {
                uid: uid,
            },
        });
    }

    create(createUserDto: CreateUserDto) {
        const user = this.userRepository.create(createUserDto);
        return this.userRepository.save(user);

    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        const user = await this.userRepository.preload({ 
            id: +id,
            ...updateUserDto,});
            if(!user) {
                throw new NotFoundException(`User with id "${id}" not found`);
            }else{
                return this.userRepository.save(user);
            }
    }

    delete(id: string) {
        const user = this.userRepository.findOne(id);
        if(!user) {
            throw new NotFoundException(`User with id "${id}" not found`);
        } else{
            return this.userRepository.delete(id);
        }
    }

}
