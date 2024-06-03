# Recipebox App

An app that fetches data from an api and displays the different recipeboxes to the user. A user can bookmark a recipe of his choice and then to see the final bookmarked list in a bottom panel.

## How to run the app

- Clone the repo locally or download the zip file
- In the terminal run `npm install; npm run dev`
- Enjoy

## Tech used

- React, Typescript, Vite, hero-icons

## Notes:

- I used a simple useEffect to fetch the data on mount. For a bigger app, I'd use a fetching data library such as react query or SWR.
- I added a react hook called useKeyup. I made it generic, but in this particular use case it is only used when closing the panel on clicking the escape key.
- I used the useContext hook to pass state and functions among the components to avoid prop drilling and maintain a single source of truth.
- added new screen size: "xs". design shows for 393px width screen size two items per column. So below this mark we're down to single item per column
- font family and colour palette is a bit different from figma design
- ui folder is meant for holding generic components which will be used across the app.
