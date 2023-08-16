import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserCreateDto} from "./dto/user.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private readonly userService:UserService) {
    }

    @Post()
    async createdUser (@Body()body:UserCreateDto){
         return  this.userService.createUser(body);
    }

    @Get()
    async getAll (){
       return  this.userService.getAllUsers()
    }

    @Get(':userId')
    async getOneUsers(@Param('userId')userId:string){
        return this.userService.getOneUser(userId)
    }
}
