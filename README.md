# Euromoney Top Guns

I bootstrapped this project with with [Create React App](https://github.com/facebook/create-react-app).

## Running the project

### Setup

Install the dependencies with `npm i`.

### Run

`npm start` runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Test

`npm test` launches the test runner.

## Other info

### Data loading

I did consider having some kind of skeleton loader, but decided against, because the load is so fast at the moment.
If it was calling to an API I'd probably reconsider this.

### State management

I chose to use the relatively new Recoil library to handle the state management.
This was mainly down to wanting something lightweight, and rapid to develop with.

### Styling

I hope it's not cheating to use the material-ui library.
Given the time constraint it was the quickest way to get a polished-looking UI.

### Missing

1. Localisation support
2. E2E tests
