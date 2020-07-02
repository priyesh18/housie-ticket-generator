# Ticket Generator for Housie/Tambola game.
## Description
- The website generates tickets with *Food Items* instead of *Numbers* (like in original game).  
- It has 4 categories of foods (Gujarati, Italian, Punjabi, South Indian) with 25 items per category. Total 100 items. 
- A ticket is a 4x4 grid of images with 4 random items from each category.
- The *Withdraw* is done from the 100 items randomly with that item removed from the pool for future withdrawals. (Resets on page refresh).

## Adapt the game to a different theme.
1. Replace the 4 folders inside the `public/images/` directory with your 4 folders containing 25 images each.
1. Run `npm install`
1. Run `npm start` to open locally.


## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />


