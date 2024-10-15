import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { ApiProperty, OmitType } from "@nestjs/swagger";
import { Type } from 'class-transformer';
import { CreateAlbumDto } from "../../albums/dto/create-album.dto";

export class Albums extends OmitType (CreateAlbumDto, ['artistId', 'bandsId']) {}

export class CreateBandDto {
  @ApiProperty({
    description: 'Name of the band',
    example: 'The Beatles',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Genre of the band',
    example: 'Rock',
  })
  @IsNotEmpty()
  @IsString()
  genre: string;

  @ApiProperty({
    description: 'Number of members in the band',
    example: '4',
  })
  @IsNotEmpty()
  @IsNumber()
  members: number;

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
    description: 'Image of the band',
    example: 'https://www.google.com',
  })
  image: string;

  @ApiProperty({
    description: 'Description of the artist',
    example: 'The king of pop',
  })
  @IsString()
  description: string;
}
