import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateAudiobookDto } from './dto/create-audiobook.dto';
import { UpdateAudiobookDto } from './dto/update-audiobook.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AudiobooksService {
  constructor(private readonly prismaService: PrismaService ) {
  }
  async create(createAudiobookDto: CreateAudiobookDto) {
    const { episodes, ...rest } = createAudiobookDto;
    try {
       await this.prismaService.audiobooks.create({
         data: {
           ...rest,
           episodes: {
             create: episodes
           }
         },
       })
      return {
        message: 'Audiobook created successfully',
        data: null,
      }
    } catch (error) {
      console.log(error)
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  async findAll() {
    try {
      const audobooks = await this.prismaService.audiobooks.findMany({
        include: {
          episodes: true
        }
      })
      return audobooks
    } catch (error) {
      console.log(error)
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  async findOne(id: string) {
    try {
     const audioBook = await this.prismaService.audiobooks.findUnique({
       where: {
         id
       },
       include: {
         episodes: true,
       }
     })
      return audioBook
    } catch (error) {
      console.log(error)
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  async update(id: string, updateAudiobookDto: UpdateAudiobookDto) {
    const { episodes, ...rest } = updateAudiobookDto;
    try {
      await this.prismaService.audiobooks.update({
        data: {
          ...rest,
          episodes: {
            deleteMany: {},
            create: episodes
          }
        },
        where: {
          id
        }
      })
      return {
        message: 'Audiobook updated successfully',
        data: null,
      }
    } catch (error) {
      console.log(error)
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  async remove(id: string) {
    try {
     await this.prismaService.audiobooks.delete({
       where: {
         id
       }
     })
      return {
        message: 'Audiobook deleted successfully',
        data: null,
      }
    } catch (error) {
      console.log(error)
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }
}
