import React from "react";
import { RecipeboxContext } from "../context/RecipeboxContext";
import RecipeCard from "./RecipeboxCard";

export default function RecipeboxCardList() {
  const { recipeboxes } = React.useContext(RecipeboxContext);

  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {recipeboxes &&
        recipeboxes.length > 0 &&
        recipeboxes.map((recipebox) => (
          <RecipeCard key={recipebox.id} recipebox={recipebox} />
        ))}
    </ul>
  );
}
