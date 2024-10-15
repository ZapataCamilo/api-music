import { Module } from '@nestjs/common';
import { AudiobooksService } from './audiobooks.service';
import { AudiobooksController } from './audiobooks.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [AudiobooksController],
  providers: [AudiobooksService],
})
export class AudiobooksModule {}
