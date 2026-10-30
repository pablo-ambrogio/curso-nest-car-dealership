import { Brand } from "../../brands/entities/brand.entity.js";
import { v4 as uuid } from 'uuid'


export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: "Volvo",
        createAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: "Peugeot",
        createAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: "Honda",
        createAt: new Date().getTime()
    },
]