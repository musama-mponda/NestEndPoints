/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { InternController } from './intern.controller';
import { InternService } from './intern.service';

@Module({
  imports: [InternModule],
  controllers: [InternController],
  providers: [InternService],
})
export class InternModule {}
