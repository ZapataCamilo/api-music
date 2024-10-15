import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreatePodcastDto } from './dto/create-podcast.dto';
import { UpdatePodcastDto } from './dto/update-podcast.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PodcastsService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createPodcastDto: CreatePodcastDto) {
    const { episodes, ...rest} = createPodcastDto;
    try {
      await this.prismaService.podcasts.create({
        data:
          {
            ...rest,
            episodes: {
              create: episodes,
            }
          }
      });
      return {
        message: 'Podcast created successfully',
        data: null
      }
    } catch (error) {
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  async findAll() {
    try {
     const findAllPodcast = await this.prismaService.podcasts.findMany({ include: { episodes: true } });
      return findAllPodcast;
    } catch (error) {
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  async findOne(id: string) {
    try {
      const findPodCast = await this.prismaService.podcasts.findUnique({
        where: {
          id
        },
        include: {
          episodes: true
        }
      })
      return findPodCast;
    } catch (error) {
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  async update(id: string, updatePodcastDto: UpdatePodcastDto) {
    await this.findOne(id);
    const { episodes, ...rest } = updatePodcastDto;
    try {
      const updatePodCast = await this.prismaService.podcasts.update({
        where: {
          id
        },
        data: {
          ...rest,
          episodes: {
            deleteMany: {},
            createMany: {
              data: episodes
            }
          }
        }
      });
      if(!updatePodCast) {
        throw new HttpException(
          'Podcast not found',
          HttpStatus.NOT_FOUND,
        );
      }
      return {
        message: 'Podcast updated successfully',
        data: null
      }
    } catch (error) {
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  async remove(id: string) {
    await this.findOne(id);
    try {
      await this.prismaService.podcasts.delete({ where: { id } });
      return {
        message: 'Podcast deleted successfully',
        data: null
      }
    } catch (error) {
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }
}
