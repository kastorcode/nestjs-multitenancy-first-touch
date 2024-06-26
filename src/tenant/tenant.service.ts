import { Injectable, Scope } from '@nestjs/common'
import { Partner } from '@prisma/client'

@Injectable({
  scope: Scope.REQUEST
})
export class TenantService {

  private tenant : Partner

  getTenant () : Partner {
    return this.tenant
  }

  setTenant (tenant : Partner) {
    this.tenant = tenant
  }

}
