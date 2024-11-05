import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateProposalsDto {
  @ApiProperty()
  @IsNumber({}, { message: 'User ID must be a number.' })
  userId: number;

  @ApiProperty()
  @IsString({ message: 'Asset name must be a string.' })
  assetName: string;

  @ApiProperty()
  @IsString({ message: 'Description must be a string.' })
  description: string;

  @ApiProperty()
  @IsNumber({}, { message: 'Price must be a number.' })
  price: number;

  @ApiProperty()
  @IsString({ message: 'Category must be a string.' })
  category: string;

  @ApiProperty()
  @IsArray({ message: 'Images must be an array of strings.' })
  @ArrayNotEmpty({ message: 'Images array cannot be empty.' })
  images: string[];
}
