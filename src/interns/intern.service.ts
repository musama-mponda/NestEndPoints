/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { HobbitionIntern } from './intern.model';

@Injectable()
export class InternService {
  intern: HobbitionIntern[] = [];

  addIntern(intern: HobbitionIntern): HobbitionIntern {
    this.intern.push(intern);
    return intern;
  }

  getHello(): string {
    return 'Hello People...';
  }

  getAllIntern(): HobbitionIntern[] {
    return this.intern;
  }

  updateInternService(id: number, { ...intern }): HobbitionIntern {
    let prevIntern: HobbitionIntern = this.intern.find((x) => x.id == id);
    prevIntern = { ...prevIntern, ...intern };
    this.intern[this.intern.indexOf(prevIntern)] = prevIntern;
    return prevIntern;
  }
}
