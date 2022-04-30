import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface CreateCustomerParams {
  id : string;
}

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  getCustomerByAuthUserId(id: string) {
    return this.prisma.customer.findUnique({
      where: {
        id,
      },
    });
  }

  async createCustomer({ id  }: CreateCustomerParams) {
    return this.prisma.customer.create({
      data: {
        id,
      },
    });
  }
}
