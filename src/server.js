import {createServer} from 'miragejs';
import faker from 'faker/locale/it';

export default function () {
  createServer({
    routes() {
      this.get('/api/products', () => ({
        products: [
          {
            id: 1,
            name: 'Product Name',
            price: faker.commerce.price(),
            image: faker.image.image()
          },
          {
            id: 2,
            name: 'Product Name',
            price: faker.commerce.price(),
            image: faker.image.image()
          },
          {
            id: 3,
            name: 'Product Name',
            price: faker.commerce.price(),
            image: faker.image.image()
          },
          {
            id: 4,
            name: 'Product Name',
            price: faker.commerce.price(),
            image: faker.image.image()
          },
          {
            id: 5,
            name: 'Product Name',
            price: faker.commerce.price(),
            image: faker.image.image()
          },
          {
            id: 6,
            name: 'Product Name',
            price: faker.commerce.price(),
            image: faker.image.image()
          },
          {
            id: 7,
            name: 'Product Name',
            price: faker.commerce.price(),
            image: faker.image.image()
          },
          {
            id: 8,
            name: 'Product Name',
            price: faker.commerce.price(),
            image: faker.image.image()
          },
          {
            id: 9,
            name: 'Product Name',
            price: faker.commerce.price(),
            image: faker.image.image()
          },
          {
            id: 10,
            name: 'Product Name',
            price: faker.commerce.price(),
            image: faker.image.image()
          },
          {
            id: 11,
            name: 'Product Name',
            price: faker.commerce.price(),
            image: faker.image.image()
          },
          {
            id: 12,
            name: 'Product Name',
            price: faker.commerce.price(),
            image: faker.image.image()
          },
          {
            id: 13,
            name: 'Product Name',
            price: faker.commerce.price(),
            image: faker.image.image()
          },
          {
            id: 14,
            name: 'Product Name',
            price: faker.commerce.price(),
            image: faker.image.image()
          },
          {
            id: 15,
            name: 'Product Name',
            price: faker.commerce.price(),
            image: faker.image.image()
          },
          {
            id: 16,
            name: 'Product Name',
            price: faker.commerce.price(),
            image: faker.image.image()
          }
        ]
      }));
    }
  });
}
