/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { HobbitionIntern } from '@prisma/client';
import { InternService } from './intern.service';

@Controller('interns')
// POST http://localhost/interns
export class InternController {
  constructor(private readonly internService: InternService) {}

  @Get()
  async get(): Promise<HobbitionIntern[]> {
    console.log('hello');
    return await this.internService.getAllInterns();
  }

  @Get(':id')
  async getInternById(@Param('id') id: number): Promise<HobbitionIntern> {
    return await this.internService.getInternById(id);
  }

  @Post()
  async post(@Body() intern: HobbitionIntern): Promise<HobbitionIntern> {
    return await this.internService.createIntern(intern);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() intern: Partial<HobbitionIntern>,
  ) {
    return await this.internService.updateIntern(id, intern);
  }

  /*@Post()
  insertInterns(@Body() intern: HobbitionIntern): any {
    const generatedId = this.internService.addIntern(intern);
    return generatedId;
  }

  @Get()
  getAllIntern(): HobbitionIntern[] {
    return this.internService.getAllIntern();
  }

  @Patch(':id')
  updateInterns(
    @Param('id') id: number,
    @Body() { ...intern },
  ): HobbitionIntern {
    return this.internService.updateInternService(id, intern);
  }*/
}
