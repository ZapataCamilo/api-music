import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AudiobooksService } from './audiobooks.service';
import { CreateAudiobookDto } from './dto/create-audiobook.dto';
import { UpdateAudiobookDto } from './dto/update-audiobook.dto';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('audiobooks')
@Controller('audiobooks')
export class AudiobooksController {
  constructor(private readonly audiobooksService: AudiobooksService) {}

  @Post()
  create(@Body() createAudiobookDto: CreateAudiobookDto) {
    return this.audiobooksService.create(createAudiobookDto);
  }

  @Get()
  findAll() {
    return this.audiobooksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.audiobooksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAudiobookDto: UpdateAudiobookDto) {
    return this.audiobooksService.update(id, updateAudiobookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.audiobooksService.remove(id);
  }
}
