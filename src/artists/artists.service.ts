import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ArtistsService {
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

  async create(createArtistDto: CreateArtistDto) {
    const { albums, ...rest } = createArtistDto;
    const albumsInput = this.albumsInput(albums);
    try {
      await this.prismaService.artists.create({
        data: {
          ...rest,
          albums: {
            create: albumsInput
          }
        },
      });
      return {
        message: 'Artist created successfully',
        data: null,
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const artist = await this.prismaService.artists.findMany({
        include: {
          albums: {
            include: {
              songs: true
            }
          },
        },
      });
      return artist;
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const findOne = await this.prismaService.artists.findUnique({
        where: {
          id,
        },
        include: {
          albums: {
            include: {
              songs: true,
            }
          },
        },
      });
      if (!findOne) {
        throw new HttpException(
          'Artist not found',
          HttpStatus.NOT_FOUND,
        );
      }
      return findOne;
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateArtistDto: UpdateArtistDto) {
    await this.findOne(id);
    const { albums, ...rest } = updateArtistDto;
    const albumsInput = this.albumsInput(albums);
    try {
      await this.prismaService.artists.update({
        where: {
          id,
        },
        data: {
          ...rest,
          albums: {
            deleteMany: {},
            create: albumsInput
          }
        }
      })
      return {
        message: 'Artist updated successfully',
        data: null,
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    await this.findOne(id);
    try {
      await this.prismaService.artists.delete({
        where:{
          id
        }
      })
      return {
        message: 'Artist deleted successfully',
        data: id,
      };
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
