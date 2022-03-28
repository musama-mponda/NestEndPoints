/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { HobbitionIntern } from '@prisma/client';
import { PrismaServiceService } from 'src/prisma-service/prisma-service.service';

@Injectable()
export class InternService {
  constructor(private readonly prismaService: PrismaServiceService) {}

  async createIntern(
    intern: Omit<HobbitionIntern, 'id'>,
  ): Promise<HobbitionIntern> {
    Logger.debug('create inter', intern);

    return await this.prismaService.hobbitionIntern.create({
      data: intern,
    });
  }

  async updateIntern(
    id: number,
    intern: Partial<HobbitionIntern>,
  ): Promise<HobbitionIntern> {
    return await this.prismaService.hobbitionIntern.update({
      where: {
        id: id,
      },
      data: { ...intern },
    });
  }

  async getAllInterns(): Promise<HobbitionIntern[]> {
    const foundInterns = await this.prismaService.hobbitionIntern.findMany();

    return foundInterns;
  }

  async getInternById(internId: number): Promise<HobbitionIntern> {
    return await this.prismaService.hobbitionIntern.findFirst({
      where: {
        id: internId,
      },
    });
  }

  /*addIntern(intern: HobbitionIntern): HobbitionIntern {
    //this.intern.push(intern);
    return intern;
  }

  getHello(): string {
    return 'Hello People...';
  }

  getAllIntern(): HobbitionIntern[] {
    return this.prismaService.HobbitionIntern.findMany();
  }

  updateInternService(id: number, { ...intern }): HobbitionIntern {
    let prevIntern: HobbitionIntern = this.intern.find((x) => x.id == id);
    prevIntern = { ...prevIntern, ...intern };
    this.intern[this.intern.indexOf(prevIntern)] = prevIntern;
    return prevIntern;
  }*/
}
