import { Body, Controller, Post } from '@nestjs/common'
import { UserPresenter } from '../users/user.presenter'
import { UsersService } from '../users/users.service'
import { CreateUserDto } from '../users/dto/create-user.dto'

@Controller('users/partners')
export class PartnersController {

  constructor (private usersService : UsersService) {}

  @Post()
  async create (@Body() data : CreateUserDto) {
    const partner = await this.usersService.createPartner(data)
    return new UserPresenter(partner)
  }

}
