import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from 'src/auth/auth.guard'
import { PartnersService } from './partners.service'
import { CreatePartnerDto } from './dto/create-partner.dto'

@UseGuards(AuthGuard)
@Controller('partners')
export class PartnersController {

  constructor(private readonly partnersService : PartnersService) {}

  @Post()
  create (@Body() createPartnerDto : CreatePartnerDto, @Req() req) {
    return this.partnersService.create({
      ...createPartnerDto, userId: req.user.id
    })
  }

  @Get()
  findAll () {
    return this.partnersService.findAll()
  }

}
