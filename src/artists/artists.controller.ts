import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Artists')
@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  @ApiResponse({ status: 200, description: 'Artist created successfully' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistsService.create(createArtistDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Return all artists' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.artistsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Return an artist' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findOne(@Param('id') id: string) {
    return this.artistsService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Artist updated successfully' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  update(@Param('id') id: string, @Body() updateArtistDto: UpdateArtistDto) {
    return this.artistsService.update(id, updateArtistDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Artist deleted successfully' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  remove(@Param('id') id: string) {
    return this.artistsService.remove(id);
  }
}
