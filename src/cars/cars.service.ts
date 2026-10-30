import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface.js';
import { v4 as uuid } from 'uuid'
import { UpdateCarDto, CreateCarDto } from './dto/index.js';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla',
        // }
    ];
    
    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id)

        if( !car ) throw new NotFoundException(`Car with id '${ id }' not found `);
        
        return car;
    }

    create( createCarDto: CreateCarDto ) {

        const existCar = this.cars.find(car => car.brand === createCarDto.brand)

        if(existCar) throw new BadRequestException(`Car with brand '${createCarDto.brand}' really yet`);

        const newCar: Car = {
            id: uuid(),
            model: createCarDto.model,
            brand: createCarDto.brand
        }

        this.cars.push(newCar);
        return newCar;
    }

    update( id: string ,updateCarDto: UpdateCarDto ) {

        let car = this.findOneById(id);

        if( updateCarDto?.id && updateCarDto?.id !== id ) 
            throw new BadRequestException(`Car id is not valid inside body`);

        car.brand = updateCarDto?.brand ?? car.brand;
        car.model = updateCarDto?.model ?? car.model;
        car.id = id;
        return car;
    }

    delete( id: string ) {
        return this.cars.filter(car => car.id !== id);
    }

    fillCarsWithSeedDate( cars: Car[] ) {
        this.cars = cars;
    }

}
