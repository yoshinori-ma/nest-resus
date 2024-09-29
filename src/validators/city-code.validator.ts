import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { ResasApiService } from 'src/services/resas-api.service';

@ValidatorConstraint({ name: 'IsCityCodeValid', async: true })
@Injectable()
export class IsCityCodeValidConstraint implements ValidatorConstraintInterface {
  constructor(private readonly resasApiService: ResasApiService) {}

  async validate(
    cityCode: string,
    args: ValidationArguments,
  ): Promise<boolean> {
    const object = args.object as any;
    const prefCode = object.prefCode;

    if (!prefCode) {
      // prefCode が未定義の場合、バリデーションをスキップ
      return false;
    }

    try {
      // RESAS API を使用して、市区町村コードの一覧を取得
      const cities = await this.resasApiService.getCitiesByPrefCode(prefCode);
      const cityCodes = cities.map((city) => city.cityCode);

      // cityCode が取得した一覧に含まれているか確認
      return cityCodes.includes(cityCode);
    } catch (error) {
      console.log(error);
      // エラーが発生した場合はバリデーションを失敗させる
      return false;
    }
  }

  defaultMessage(args: ValidationArguments): string {
    console.log(args);
    return `cityCode must be a valid code for the specified prefCode`;
  }
}
