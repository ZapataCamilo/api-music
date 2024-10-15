import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreateEpisodesDto } from "../../episodes/create-episodes.dto";

export class Episodes extends OmitType(CreateEpisodesDto, ['podcastId']) {}

export class CreatePodcastDto {
  @ApiProperty({
    description: 'Name of the podcast',
    example: 'The Joe Rogan Experience',
  })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({
    type: String,
    description: 'The name of the author',
    example: 'The name of the author',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({
    description: 'Genre of the podcast',
    example: 'Comedy',
  })
  @IsNotEmpty()
  @IsString()
  genre: string

  @ApiProperty({
    description: 'Country of the podcast',
    example: 'United States',
  })
  @IsOptional()
  @IsString()
  country: string

  @ApiProperty({
    description: 'Image of the podcast',
    example: 'https://www.google.com/image.png',
  })
  @IsNotEmpty()
  @IsString()
  image: string

  @ApiProperty({
    description: 'Description of the podcast',
    example: 'The king of podcasts',
  })
  @IsOptional()
  @IsString()
  description: string

  @ApiProperty({
    type: [Episodes],
    required: true,
  })
  @ValidateNested({ each: true })
  @Type(() => Episodes)
  @IsNotEmpty()
  episodes: Episodes[]
}
