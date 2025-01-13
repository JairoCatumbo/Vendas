import { Controller,   Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {

    
@Post()
async getAllUsers(){
    return JSON.stringify({test:'abc'});

}

}

