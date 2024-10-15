import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreateSongDto } from "../../songs/dto/create-song.dto";

export class Songs extends OmitType(CreateSongDto, ['albumId']) {}

export class CreateAlbumDto {

  @ApiProperty({
    type: String,
    description: 'Id of the artist',
    example: '1',
  })
  @IsString()
  artistId: string

  @ApiProperty({
    type: String,
    description: 'id of the band',
    example: 'Abbey Road',
  })
  @IsString()
  bandsId: string

  @ApiProperty({
    type: String,
    description: 'Name of the album',
    example: 'Abbey Road',
  })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({
    type: Number,
    description: 'Year of the album',
    example: 1969,
  })
  @IsNumber()
  @IsOptional()
  year: number

  @ApiProperty({
    type: String,
    description: 'Description of the album',
    example: 'Abbey Road is the eleventh studio album by the English rock band the Beatles, released on 26 September 1969 by Apple Records.',
  })
  @IsString()
  description: string

  @ApiProperty({
    type: String,
    description: 'Image of the album',
    example: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
  })
  @IsString()
  @IsNotEmpty()
  image: string

  @ApiProperty({
    type: [Songs],
    required: true,
  })
  @ValidateNested({ each: true })
  @Type(() => Songs)
  @IsNotEmpty()
  songs:   Songs[]
}