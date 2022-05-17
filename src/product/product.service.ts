import { HttpException, Inject, Injectable } from '@nestjs/common';
import { product } from './entities/product.entity';

@Injectable()
export class ProductService {
    constructor(
        @Inject('PRODUCTS_REPOSITORY')
        private productRepository: typeof product,
    ) {}
    async getAll(): Promise<product[]> {
        return this.productRepository.findAll<product>();
    }
    async getProductByID(Id): Promise<any> {
        return await this.productRepository.findOne({ where: { IDPR: Id } });
    }
    //  addProduct(product): Promise<any> {
    //   return new Promise(resolve => {
    //       this.product.push(product);
    //       resolve(this.product);
    //   });
}
