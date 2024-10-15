import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSongDto {

  @ApiProperty({
    description: 'Id of the album',
    example: '1',
  })
  @IsString()
  albumId: string;

  @ApiProperty({
    description: 'Name of the song',
    example: 'Come Together',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Url of the song',
    example: 'https://www.youtube.com/watch?v=0fNG9ZjvK1U',
  })
  url: string;
}