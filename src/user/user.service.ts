import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interfaces';
import { BadRequestException } from '@nestjs/common/exceptions';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    try {
      const createdUser = new this.userModel(createUserDto);
      return createdUser.save();
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async findAll() {
    try {
      const users = await this.userModel.find();
      return users;
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.userModel.findOne({ _id: id });
      return user;
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const updatedResult = await this.userModel.updateOne(
        { _id: id },
        updateUserDto,
      );
      return updatedResult;
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async remove(id: string) {
    try {
      const removedResult = await this.userModel.deleteOne({ _id: id });
      return removedResult;
    } catch (err) {
      throw new BadRequestException();
    }
  }
}
