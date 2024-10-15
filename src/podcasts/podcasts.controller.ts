import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { CreatePodcastDto } from './dto/create-podcast.dto';
import { UpdatePodcastDto } from './dto/update-podcast.dto';
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('podcasts')
@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Post()
  @ApiResponse({ status: 200, description: 'Podcast create successfully' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  create(@Body() createPodcastDto: CreatePodcastDto) {
    return this.podcastsService.create(createPodcastDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Return all podcasts' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findAll() {
    return this.podcastsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Return a podcast' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  findOne(@Param('id') id: string) {
    return this.podcastsService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Podcast updated successfully' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  update(@Param('id') id: string, @Body() updatePodcastDto: UpdatePodcastDto) {
    return this.podcastsService.update(id, updatePodcastDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Podcast deleted successfully' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  remove(@Param('id') id: string) {
    return this.podcastsService.remove(id);
  }
}
