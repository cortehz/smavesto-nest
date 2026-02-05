import { ApiProperty } from '@nestjs/swagger';

export class CreatePortfolioDto {
  @ApiProperty()
  name: string = '';

  @ApiProperty({
    enum: ['CONSERVATIVE', 'MODERATE', 'AGGRESSIVE'],
    default: 'MODERATE',
  })
  riskLevel: 'CONSERVATIVE' | 'MODERATE' | 'AGGRESSIVE' = 'MODERATE';

  @ApiProperty({ default: 0 })
  totalValue: number = 0;

  @ApiProperty()
  userId: string = '';
}
