import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEpisodesDto {

  @ApiProperty({
    description: 'Name of the episode',
    example: 'Programming 101',
  })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({
    description: 'Id of the podcast',
    example: '1',
  })
  @IsString()
  podcastId: string

  // @ApiProperty({
  //   description: 'Id of the audiobookId',
  //   example: '1',
  // })
  // @IsString()
  // audiobookId: string

  @ApiProperty({
    description: 'Duration of the episode',
    example: 60,
  })
  @IsNotEmpty()
  @IsNumber()
  duration: number

  @ApiProperty({
    description: 'Image of the episode',
    example: 'https://example.com/image.jpg',
  })
  @IsNotEmpty()
  @IsString()
  image: string

  @ApiProperty({
    description: 'Description of the episode',
    example: 'Learn the basics of programming',
  })
  @IsOptional()
  @IsString()
  description: string

  @ApiProperty({
    description: 'Year of the episode',
    example: 2021,
  })
  @IsNotEmpty()
  @IsNumber()
  year: number
}