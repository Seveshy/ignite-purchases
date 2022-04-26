import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';

import { AuthorizationGuard } from 'src/http/auth/authorization.guard';
import { PurchasesService } from 'src/services/purchases.service';

import { Purchase } from '../models/purchase';

@Resolver()
export class PurchasesResolver {
  constructor(private purchaseService: PurchasesService) {}

  @Query(() => [Purchase])
 // @UseGuards(AuthorizationGuard)
  purchases() {
    return this.purchaseService.listAllPurchases();
  }
}
