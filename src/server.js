import { createServer } from "miragejs";
import faker from 'faker/locale/it';

export default function () {
  createServer({
    routes() {
      this.get("/api/products", () => ({
        products: [{
					id: 1,
					name: faker.commerce.productName(),
					prezzo: faker.commerce.price(),
					immagine: faker.image.image()
				}, {
					id: 2,
					name: faker.commerce.productName(),
					prezzo: faker.commerce.price(),
					immagine: faker.image.image()
				}, {
					id: 3,
					name: faker.commerce.productName(),
					prezzo: faker.commerce.price(),
					immagine: faker.image.image()
				}, {
					id: 4,
					name: faker.commerce.productName(),
					prezzo: faker.commerce.price(),
					immagine: faker.image.image()
				}, {
					id: 5,
					name: faker.commerce.productName(),
					prezzo: faker.commerce.price(),
					immagine: faker.image.image()
				}, {
					id: 6,
					name: faker.commerce.productName(),
					prezzo: faker.commerce.price(),
					immagine: faker.image.image()
				}, {
					id: 7,
					name: faker.commerce.productName(),
					prezzo: faker.commerce.price(),
					immagine: faker.image.image()
				}, {
					id: 8,
					name: faker.commerce.productName(),
					prezzo: faker.commerce.price(),
					immagine: faker.image.image()
				}],
      }))
    },
  })
}