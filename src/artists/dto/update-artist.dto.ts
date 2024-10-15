import { CreateArtistDto } from './create-artist.dto';
import { OmitType } from "@nestjs/swagger";

export class UpdateArtistDto extends OmitType(CreateArtistDto, ['name' , 'genre'] as const) {}
