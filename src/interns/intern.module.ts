/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaServiceService } from 'src/prisma-service/prisma-service.service';
import { InternController } from './intern.controller';
import { InternService } from './intern.service';

@Module
// ({
//   providers: [InternsService, PrismaService],
//   controllers: [InternsController]
// })

({
  imports: [InternModule],
  controllers: [InternController],
  providers: [InternService, PrismaServiceService],
})
export class InternModule {}
