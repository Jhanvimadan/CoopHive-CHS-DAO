import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class BrowseProposalsDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString({ message: 'Category must be a string.' })
  category?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString({ message: 'Investment range must be a string.' })
  investmentRange?: string; 
}
