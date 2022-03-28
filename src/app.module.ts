import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternController } from './interns/intern.controller';
import { InternModule } from './interns/intern.module';
import { InternService } from './interns/intern.service';
import { PrismaServiceService } from './prisma-service/prisma-service.service';

@Module({
  imports: [InternModule],
  controllers: [AppController, InternController],
  providers: [AppService, InternService, PrismaServiceService],
})
export class AppModule {}
