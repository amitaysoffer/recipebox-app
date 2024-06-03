import React from "react";
import { RecipeboxContext } from "../context/RecipeboxContext";

export default function Header() {
  const { getNumOfBookmarkRecipeboxes, setShowPanel } =
    React.useContext(RecipeboxContext);
  const numOfBookmarks = getNumOfBookmarkRecipeboxes();

  return (
    <header>
      <div className="relative my-20">
        <div className="text-center">
          <h1 className="text-3xl">RECIPEBOX</h1>
        </div>
        <div
          className={`absolute right-0 top-0 ${
            !numOfBookmarks && "opacity-50"
          }`}
        >
          <button
            className={`relative outline-none ${
              !numOfBookmarks && "cursor-not-allowed"
            }`}
            disabled={!numOfBookmarks}
            onClick={() => setShowPanel(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10 z-0"
            >
              <path
                fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="absolute flex justify-center items-center -right-1 -top-1 bg-red-500 rounded-full h-5 w-5 text-white">
              {numOfBookmarks}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
