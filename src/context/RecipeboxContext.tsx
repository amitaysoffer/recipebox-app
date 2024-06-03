import React from "react";
import { RecipeboxProps } from "../App";

type RecipeboxProviderProps = {
  children: React.ReactNode;
};

type RecipeboxContextProps = {
  recipeboxes: RecipeboxProps[];
  setRecipeboxes: React.Dispatch<React.SetStateAction<RecipeboxProps[]>>;
  showPanel: boolean;
  setShowPanel: React.Dispatch<React.SetStateAction<boolean>>;
  addBookmarkRecipebox: (id: number) => void;
  removeBookmarkRecipebox: (id: number) => void;
  getNumOfBookmarkRecipeboxes: () => number;
  getBookmarkRecipeboxes: () => RecipeboxProps[];
};

export const RecipeboxContext = React.createContext(
  {} as RecipeboxContextProps
);

export default function RecipeboxProvider({
  children,
}: RecipeboxProviderProps) {
  const [recipeboxes, setRecipeboxes] = React.useState<RecipeboxProps[]>([]);
  const [showPanel, setShowPanel] = React.useState(false);

  function addBookmarkRecipebox(id: number) {
    setRecipeboxes((prevList) => {
      return prevList.map((item) => {
        if (item.id === id) {
          return { ...item, bookmark: !item.bookmark };
        } else {
          return item;
        }
      });
    });
  }

  function removeBookmarkRecipebox(id: number) {
    setRecipeboxes((prevList) => {
      return prevList.map((item) => {
        if (item.id === id) {
          return { ...item, bookmark: false };
        } else {
          return item;
        }
      });
    });
  }

  function getBookmarkRecipeboxes() {
    return recipeboxes.filter((recipe) => recipe.bookmark === true);
  }

  function getNumOfBookmarkRecipeboxes() {
    return getBookmarkRecipeboxes().length;
  }

  return (
    <RecipeboxContext.Provider
      value={{
        recipeboxes,
        setRecipeboxes,
        addBookmarkRecipebox,
        getNumOfBookmarkRecipeboxes,
        getBookmarkRecipeboxes,
        showPanel,
        setShowPanel,
        removeBookmarkRecipebox,
      }}
    >
      {children}
    </RecipeboxContext.Provider>
  );
}
