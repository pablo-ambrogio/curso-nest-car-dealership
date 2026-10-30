import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service.js';
import { CARS_SEED } from './data/cars.seed.js';
import { BrandsService } from '../brands/brands.service.js';
import { BRANDS_SEED } from './data/brands.seed.js';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ) {}

  populateDB() {


    this.carsService.fillCarsWithSeedDate(CARS_SEED);
    this.brandsService.fillBrandsWithSeedDate(BRANDS_SEED);
    
    return `SEED executed`;
  }

}
