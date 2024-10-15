import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBandDto } from './dto/create-band.dto';
import { UpdateBandDto } from './dto/update-band.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BandService {
  constructor(private readonly prismaService: PrismaService) {}

  albumsInput(albums: any) {
    const albumsInput = albums?.map((album) => ({
      name: album.name,
      image: album.image,
      description: album.description,
      year: album.year,
      songs: {
        create: album.songs.map((song) => ({
          name: song.name,
          url: song.url,
        })),
      },
    }));
    return albumsInput;
  }

  async create(createBandDto: CreateBandDto) {
    const { albums, ...rest } = createBandDto;
    const albumsInput = this.albumsInput(albums);
    try {
      await this.prismaService.bands.create({
        data: {
          ...rest,
          albums: {
            // connect: albums.map(album => ({ id: album.bandsId })),
            create: albumsInput,
          },
        },
      });
      return {
        message: 'Band created successfully',
        data: null,
      };
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      return await this.prismaService.bands.findMany({
        include: {
          albums: {
            include: {
              songs: true,
            },
          },
        },
      });
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const findOne = await this.prismaService.bands.findUnique({
        where: {
          id,
        },
        include: {
          albums: {
            include: {
              songs: true,
            },
          },
        },
      });
      if (!findOne) {
        throw new HttpException('Band not found', HttpStatus.NOT_FOUND);
      }
      return findOne;
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateBandDto: UpdateBandDto) {
    await this.findOne(id);
    const { albums, ...rest } = updateBandDto;
    const albumsInput = this.albumsInput(albums);
    try {
      const updateBand = await this.prismaService.bands.update({
        where: {
          id,
        },
        data: {
          ...rest,
          albums: {
            deleteMany: {},
            create: albumsInput,
          },
        },
      });
      if (!updateBand) {
        throw new HttpException('Band not found', HttpStatus.NOT_FOUND);
      }
      return {
        message: 'Band updated successfully',
        data: null,
      };
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    await this.findOne(id);
    try {
      await this.prismaService.bands.delete({
        where: {
          id,
        },
      });
      return {
        message: 'Band deleted successfully',
        data: id,
      };
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
