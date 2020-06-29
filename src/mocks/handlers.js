// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.get('/products', (req, res, ctx) => {
   
    return res(
			ctx.status(200),
			ctx.delay(2000),
      ctx.json([{
				id: 1,
        name: 'borsa',
      }, {
				id: 2,
				name: 'vestito'
			}]),
    )
  }),
]