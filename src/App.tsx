import PageLayout from "./ui/PageLayout";
import { RecipeboxContext } from "./context/RecipeboxContext";
import React from "react";
import Header from "./components/Header";
import RecipeboxCardList from "./components/RecipeboxCardList";
import BookmarkListPanel from "./components/BookmarkListPanel";

type RecipeboxesApiResponse = {
  recipes: RecipeboxApiResponseProps[];
};

export type RecipeboxApiResponseProps = {
  id: number;
  slug: string;
  title: string;
  image: RecipeImageProps[];
};

export type RecipeboxProps = RecipeboxApiResponseProps & { bookmark: boolean };

type RecipeImageProps = {
  id: number;
  title: string;
  url: string;
};

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const { setRecipeboxes, showPanel } = React.useContext(RecipeboxContext);

  React.useEffect(() => {
    async function fetchRecipeboxes() {
      setIsLoading(true);
      try {
        const response = await fetch("https://api.mob.co.uk/task/recipes.json");
        const { recipes } = (await response.json()) as RecipeboxesApiResponse;

        const recipesWithBookmarkFlag = recipes.map((recipe) => {
          return {
            ...recipe,
            bookmark: false,
          };
        });

        setRecipeboxes(recipesWithBookmarkFlag);
      } catch (error) {
        console.warn("Error fetching recipeboxes data:", error);
        setError("Error fetching recipeboxes data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecipeboxes();
  }, []);

  return (
    <PageLayout>
      <Header />
      {error && <div className="text-3xl">{error}</div>}
      {isLoading && <div className="text-3xl">Loading recipe boxes...</div>}
      <RecipeboxCardList />
      {showPanel && <BookmarkListPanel />}
    </PageLayout>
  );
}

export default App;
