import { hashSync } from 'bcrypt'
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UserRoles } from './user.roles'

@Injectable()
export class UsersService {

  constructor (private prismaService : PrismaService) {}

  createPartner (data : CreateUserDto) {
    return this.prismaService.user.create({ data : {
      ...data,
      password: this.generateHash(data.password),
      roles: [UserRoles.PARTNER]
    }})
  }

  createUser (data : CreateUserDto) {
    return this.prismaService.user.create({ data : {
      ...data,
      password: this.generateHash(data.password),
      roles: [UserRoles.USER]
    }})
  }

  generateHash (password : string) {
    return hashSync(password, 10)
  }

  findOne (idOrEmail : number | string) {
    return this.prismaService.user.findFirst({
      where: typeof idOrEmail === 'number' ?
        { id: idOrEmail } :
        { email: idOrEmail }
    })
  }

}
