# Frontend Homework Assignment

[Purchase App](https://frontend-homework-martynas.vercel.app/)

## Running the project

- git clone the repo
- run `yarn` or `npm i` in the project directory
- run `yarn dev` in the project directory

## Testing

- component unit and integration tests can be run with `yarn test` in the project directory
- E2E test with cypress can be run as follows:
  - run `yarn dev` in the project directory
  - open another terminal instance, go to the project directory and run `npx cypress open`
  - in the opened app choose 'E2E Testing'
  - in the next window choose 'Chrome' and press 'Start E2E testing in Chrome'
  - in the next window choose the 'purchase_flow.cy.js' file
  - test will run automatically
