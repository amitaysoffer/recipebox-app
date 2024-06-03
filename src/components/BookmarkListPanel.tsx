import React from "react";
import { RecipeboxContext } from "../context/RecipeboxContext";
import useKeyup from "../hooks/useKeyup";

export default function BookmarkListPanel() {
  const { setShowPanel, getBookmarkRecipeboxes } =
    React.useContext(RecipeboxContext);
  const bookmarkedRecipeboxes = getBookmarkRecipeboxes();

  useKeyup("Escape", () => setShowPanel(false));

  if (bookmarkedRecipeboxes.length === 0) {
    setShowPanel(false);
  }

  return (
    <div className="fixed inset-0 grid place-content-center p-4">
      <div
        className="absolute inset-0 bg-slate-800/80"
        onClick={() => setShowPanel(false)}
      />
      <div className="w-full fixed right-0 bottom-0 h-[400px] bg-black rounded-sm p-5">
        <div className="text-end">
          <button className="text-white " onClick={() => setShowPanel(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <RecipeboxList />
      </div>
    </div>
  );
}

function RecipeboxList() {
  const { getBookmarkRecipeboxes, removeBookmarkRecipebox } =
    React.useContext(RecipeboxContext);
  const bookmarkedRecipeboxes = getBookmarkRecipeboxes();

  return (
    <div className="mt-4 overflow-scroll h-full">
      <ul className="flex flex-col gap-3">
        {bookmarkedRecipeboxes.map(({ title, image, id }) => (
          <li className="flex items-center py-2 gap-4" key={id}>
            <img
              src={image[0].url}
              alt={image[0].title}
              className="rounded-t-lg w-14 h-14 object-cover "
            />

            <h3 className="text-white">{title}</h3>

            <button
              className="text-white ml-auto bg-slate-500 rounded-full px-4 py-2"
              onClick={() => removeBookmarkRecipebox(id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
