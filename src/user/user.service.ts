import {Injectable} from '@nestjs/common';
import {UserCreateDto} from "./dto/user.dto";

@Injectable()
export class UserService {
    private users = [{id:1, name:"Ruslan",age:23},{ id:2 ,name: "Anna", age: 20}];

    async createUser (body:UserCreateDto){
        this.users.push(body);
    }

    async getAllUsers () {
        return this.users
    }

    async getOneUser (userId:number) {
        return this.users.find(i => i.id === userId)
    }
}
