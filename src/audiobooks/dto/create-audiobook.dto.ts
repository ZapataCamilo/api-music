import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreateEpisodesDto } from "../../episodes/create-episodes.dto";

export class Episodes extends CreateEpisodesDto {}
export class CreateAudiobookDto {
  @ApiProperty({
    type: String,
    description: 'The name of the audiobook',
    example: '1',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    description: 'The name of the author',
    example: 'Max Mustermann',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({
    type: String,
    description: 'The genre of the audiobook',
    example: 'Drama',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  genre: string;

  @ApiProperty({
    type: String,
    description: 'The country of the audiobook',
    example: 'Persia',
  })
  @IsString()
  country: string;

  @ApiProperty({
    type: String,
    description: 'The image of the audiobook',
    example: 'https://example.com/image.jpg',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({
    type: String,
    description: 'The description of the audiobook',
    example: 'This is a description',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  description: string

  @ApiProperty({
    type: [Episodes],
    required: true
  })
  @ValidateNested({ each: true })
  @Type(() => Episodes)
  @IsNotEmpty()
  episodes: Episodes[];
}
