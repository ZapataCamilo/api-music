import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistsModule } from './artists/artists.module';
import { PrismaModule } from './prisma/prisma.module';
import { BandModule } from './band/band.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PodcastsModule } from './podcasts/podcasts.module';
import { AudiobooksModule } from './audiobooks/audiobooks.module';

@Module({
  imports: [PrismaModule, ArtistsModule, BandModule, AuthModule, UsersModule, PodcastsModule, AudiobooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
