import { IsInt, IsString, IsIn, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetEstateTransactionDto {
  @IsInt()
  @IsIn([...Array(13).keys()].map((i) => i + 2009))
  @Transform(({ value }) => parseInt(value, 10))
  year: number;

  @IsInt()
  @IsIn([...Array(47).keys()].map((i) => i + 1))
  @Transform(({ value }) => parseInt(value, 10))
  prefCode: number;

  @IsString()
  @IsNotEmpty()
  cityCode: string;

  @IsInt()
  @IsIn([1, 2, 3, 4, 5])
  @Transform(({ value }) => parseInt(value, 10))
  displayType: number;
}
