import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path';

import { DatabaseModule } from 'src/database/database.module';
import { ProductsResolver } from 'src/graphql/resolvers/products.resolver';
import { PurchasesResolver } from 'src/graphql/resolvers/purchases.resolver';
import { CustomersService } from 'src/services/customers.service';
import { ProductService } from 'src/services/products.service';
import { PurchasesService } from 'src/services/purchases.service';
@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.qgl'),
    }),
  ],
  providers: [
    ProductsResolver,
    ProductService,
    PurchasesResolver,
    PurchasesService,
    CustomersService
  ],
})
export class HttpModule {}
