import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ProposalsByUserDto {
  @ApiProperty()
  @IsNumber({}, { message: 'User ID must be a number.' })
  userId: number;
}
