/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { HobbitionIntern } from './intern.model';
import { InternService } from './intern.service';

@Controller('interns')
export class InternController {
  constructor(private readonly internService: InternService) {}

  @Post()
  insertInterns(@Body() intern: HobbitionIntern): any {
    const generatedId = this.internService.addIntern(intern);
    return generatedId;
  }

  @Get()
  getAllIntern(): HobbitionIntern[] {
    return this.internService.intern;
  }

  @Patch(':id')
  updateInterns(
    @Param('id') id: number,
    @Body() { ...intern },
  ): HobbitionIntern {
    return this.internService.updateInternService(id, intern);
  }
}
