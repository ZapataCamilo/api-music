import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreateAlbumDto } from "../../albums/dto/create-album.dto";

export class Albums extends OmitType (CreateAlbumDto, ['artistId', 'bandsId']) {}

export class CreateArtistDto {

  @ApiProperty({
    description: 'Name of the artist',
    example: 'Michael Jackson',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Genre of the artist',
    example: 'Pop',
  })
  @IsString()
  @IsNotEmpty()
  genre: string;

  @ApiProperty({
    description: 'Age of the artist',
    example: '25',
  })
  @IsNumber()
  age: number;

  @ApiProperty({
    type: [Albums],
    required: true,
  })
  @ValidateNested({ each: true })
  @Type(() => Albums)
  @IsNotEmpty()
  albums: Albums[];

  @ApiProperty({
    description: 'Country of the band',
    example: 'United Kingdom',
  })
  @IsString()
  @IsOptional()
  country: string;

  @ApiProperty({
    description: 'Image of the artist',
    example: 'https://www.google.com/image.jpg',
  })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({
    description: 'Description of the artist',
    example: 'The king of pop',
  })
  @IsString()
  description: string;
}
