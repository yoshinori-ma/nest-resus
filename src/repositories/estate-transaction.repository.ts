import { GetEstateTransactionDto } from 'src/dto/estate-transaction/get-estate-transaction.dto';

export interface IEstateTransactionRepository {
  getEstateTransactionData(params: GetEstateTransactionDto): Promise<any>;
}
