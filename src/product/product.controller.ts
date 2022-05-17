import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { product } from './entities/product.entity';
import { ProductService } from './product.service';
import { DatabaseModule } from 'src/database/database.module';
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}
    @Get()
    async findAll(): Promise<product[]> {
        console.log(DatabaseModule);
        return this.productService.getAll();
    }
    @Get(':productID')
    async findByID(@Param('productID') productId: string): Promise<product[]> {
        return this.productService.getProductByID(productId);
    }
}
