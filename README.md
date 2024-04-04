# Frontend Homework Assignment

Build a simplified purchase funnel that collects order details and executes the purchase.

## Design

[View in Figma](https://www.figma.com/file/5X88xmrbshv98i9w1ywut4/Frontend-Homework-Assignment?node-id=0%3A1)

Click <kbd>▶</kbd> button in the toolbar to view an interactive prototype:

<img src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/5aa962fe2c7d3a2c4983093d/images/5d9420f12c7d3a7e9ae1e571/file-SiluksfJfC.png" alt="Figma Presentation View" />

## Endpoints

### Mock API

[cv-mock-api.vercel.app](https://cv-mock-api.vercel.app)

- Get packages: [`GET /api/packages`](https://cv-mock-api.vercel.app/api/packages)
- Get VAT rates: [`GET /api/vat-rates`](https://cv-mock-api.vercel.app/api/vat-rates)
- Create order: `POST /api/orders`

### IP API

[ipapi.co](https://ipapi.co)

- Get user’s country: [`GET ipapi.co/json`](https://ipapi.co/json)

## Requirements

- [ ] Fetch packages from `GET /api/packages`
- [ ] Apply a correct VAT to the price by fetching VAT rates from `GET /api/vat-rates` and matching one of them with user’s country through `GET ipapi.co/json`. If VAT rates’ endpoint does not contain user’s country, apply 0% VAT
- [ ] Execute purchase by sending order details to `POST /api/orders` with the following payload (replace with actual values):
  ```json
  {
    "packageId": "single",
    "buyer": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com"
    },
    "vat": {
      "countryCode": "lt",
      "rate": 21
    },
    "price": {
      "currency": "EUR",
      "amount": 14.99,
      "grossAmount": 18.14,
      "vatAmount": 3.15
    }
  }
  ```
- [ ] Use [React Hooks](https://reactjs.org/docs/hooks-reference.html)
- [ ] Write some meaningful tests
- [ ] Share code as a private repo on GitHub. Add [@and1-lt](https://github.com/and1-lt/) as a collaborator for review
- [ ] `README` should include instructions on how to run the app
- [ ] Deploy the app somewhere

## Notes

- You can bootstrap and structure the app however you want
- If you’re unsure on how some interaction should work, just use your best judgement ✌️
