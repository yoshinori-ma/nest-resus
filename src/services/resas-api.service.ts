import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { GetEstateTransactionDto } from 'src/dto/estate-transaction/get-estate-transaction.dto';
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ResasApiService {
  private readonly apiKey = process.env.RESAS_API_KEY;
  private readonly baseUrl = 'https://opendata.resas-portal.go.jp';
  constructor(private readonly httpService: HttpService) {}

  async getEstateTransactionData(
    params: GetEstateTransactionDto,
  ): Promise<AxiosResponse<any>> {
    const headers = { 'X-API-KEY': this.apiKey };
    const url = `${this.baseUrl}/api/v1/townPlanning/estateTransaction/bar`;

    const response = await lastValueFrom(
      this.httpService.get(url, { headers, params }),
    );

    return response.data;
  }

  async getCitiesByPrefCode(prefCode: number): Promise<any[]> {
    const headers = { 'X-API-KEY': this.apiKey };
    const url = `${this.baseUrl}/api/v1/cities`;
    const params = { prefCode };

    const response = await this.httpService
      .get(url, { headers, params })
      .toPromise();

    if (response.data && response.data.result) {
      return response.data.result;
    } else {
      throw new Error('Failed to fetch city codes');
    }
  }
}
