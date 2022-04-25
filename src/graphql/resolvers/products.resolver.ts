import { UseGuards } from "@nestjs/common";
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";

import { PrismaService } from "src/database/prisma/prisma.service";
import { AuthorizationGuard } from "src/http/auth/authorization.guard";
import { ProductService } from "src/services/products.service";
import { CreateProductInput } from "../inputs/create-product-input";

import { Product } from "../models/product";

@Resolver()
export class ProductsResolver {
    constructor(private productService: ProductService) {}

    @Query(() => [Product])
   // @UseGuards(AuthorizationGuard)
    products() {
        return this.productService.listAllProducts();
    }

    @Mutation(() => Product)
    createProduct(@Args('data') data: CreateProductInput) {
        return this.productService.createProduct(data);
    }
}