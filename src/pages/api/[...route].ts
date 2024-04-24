import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import packagesResponse from '../../../mocks/packages.json';
import vatRatesResponse from '../../../mocks/vatRates.json';

export const config = {
  runtime: 'edge',
};

const app = new Hono().basePath('/api');

app.get('/packages', (context) => context.json(packagesResponse));

app.get('/vat-rates', (context) => context.json(vatRatesResponse));

app.post('/orders', async (context) => {
  context.status(201);
  return context.json({ id: Date.now() });
});

export default handle(app);
