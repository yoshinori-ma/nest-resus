import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsCityCodeValidConstraint } from 'src/validators/city-code.validator';

export function IsCityCodeValid(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsCityCodeValidConstraint,
    });
  };
}
