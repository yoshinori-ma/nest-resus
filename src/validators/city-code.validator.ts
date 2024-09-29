import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { ResasApiService } from 'src/services/resas-api.service';
import { GetEstateTransactionDto } from 'src/dto/estate-transaction/get-estate-transaction.dto';

@ValidatorConstraint({ name: 'IsCityCodeValid', async: true })
@Injectable()
export class IsCityCodeValidConstraint implements ValidatorConstraintInterface {
  constructor(private readonly resasApiService: ResasApiService) {}

  async validate(
    cityCode: string,
    args: ValidationArguments,
  ): Promise<boolean> {
    const object = args.object;

    // prefCode が未定義の場合、バリデーション失敗
    if (!isGetEstateTransactionDto(object)) {
      return false;
    }
    const prefCode = object.prefCode;

    try {
      const cities = await this.resasApiService.getCitiesByPrefCode(prefCode);
      const cityCodes = cities.map((city) => city.cityCode);

      return cityCodes.includes(cityCode);
    } catch (_error) {
      return false;
    }
  }

  defaultMessage(_args: ValidationArguments): string {
    return `cityCode must be a valid code for the specified prefCode`;
  }
}
function isGetEstateTransactionDto(
  object: any,
): object is GetEstateTransactionDto {
  return (
    typeof object === 'object' &&
    'prefCode' in object &&
    typeof object.prefCode === 'number'
  );
}
