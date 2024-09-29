import { GetEstateTransactionDto } from 'src/dto/estate-transaction/get-estate-transaction.dto';

export const IEstateTransactionRepositoryToken = 'IEstateTransactionRepository';

export interface IEstateTransactionRepository {
  getEstateTransactionData(params: GetEstateTransactionDto): Promise<any>;
}
