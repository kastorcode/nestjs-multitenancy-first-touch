import { compareSync } from 'bcrypt'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { LoginDto } from './login.dto'
import { UsersService } from './users/users.service'

@Injectable()
export class AuthService {

  constructor (private userService : UsersService, private jwtService : JwtService) {}

  async login (data : LoginDto) {
    const user = await this.userService.findOne(data.email)
    if (!user || !compareSync(data.password, user.password)) {
      throw new Error('Invalid credentials')
    }
    const { password, ...rest } = user
    return {
      access_token: this.jwtService.sign(rest)
    }
  }

}
