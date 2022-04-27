import { UseGuards } from '@nestjs/common';
import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';

import { AuthorizationGuard } from 'src/http/auth/authorization.guard';
import { ProductService } from 'src/services/products.service';
import { PurchasesService } from 'src/services/purchases.service';
import { Product } from '../models/product';

import { Purchase } from '../models/purchase';

@Resolver(() => Purchase)
export class PurchasesResolver {
  constructor(
    private purchaseService: PurchasesService,
    private productsService: ProductService
    ) {}

  @Query(() => [Purchase])
  @UseGuards(AuthorizationGuard)
  purchases() {
    return this.purchaseService.listAllPurchases();
  }

  @ResolveField(() => Product)
  product(
    @Parent() purchase: Purchase,
  ) {
    return this.productsService.getProductById(purchase.productId);
  }
}