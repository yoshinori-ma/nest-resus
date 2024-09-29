import { IsInt, IsString, IsNotEmpty, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetEstateTransactionDto {
  @IsInt()
  @Min(2009)
  @Max(2021)
  @Transform(({ value }) => parseInt(value, 10))
  year: number;

  @IsInt()
  @Min(1)
  @Max(47)
  @Transform(({ value }) => parseInt(value, 10))
  prefCode: number;

  @IsString()
  @IsNotEmpty()
  cityCode: string;

  @IsInt()
  @Min(1)
  @Max(5)
  @Transform(({ value }) => parseInt(value, 10))
  displayType: number;
}
