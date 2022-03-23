import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternController } from './interns/intern.controller';
import { InternModule } from './interns/intern.module';
import { InternService } from './interns/intern.service';

@Module({
  imports: [InternModule],
  controllers: [AppController, InternController],
  providers: [AppService, InternService],
})
export class AppModule {}
