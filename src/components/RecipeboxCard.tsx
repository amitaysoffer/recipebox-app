import React from "react";
import { RecipeboxProps } from "../App";
import { RecipeboxContext } from "../context/RecipeboxContext";

type RecipeCardProps = {
  recipebox: RecipeboxProps;
};

export default function RecipeCard({ recipebox }: RecipeCardProps) {
  const { id, title, bookmark } = recipebox;
  const { url: imgSrc, title: imgAlt } = recipebox.image[0];
  const { addBookmarkRecipebox } = React.useContext(RecipeboxContext);

  return (
    <li key={id} className="flex flex-col gap-2">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="rounded-xl h-[218px] object-cover "
      />
      <div className="flex justify-between gap-1">
        <h3 className=" xs:max-w-32 sm:max-w-40 md:max-w-48">{title}</h3>
        <button
          onClick={() => addBookmarkRecipebox(id)}
          className="w-8 h-8 bg-slate-500 rounded-full text-white flex justify-center items-center"
        >
          {bookmark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM20.25 5.507v11.561L5.853 2.671c.15-.043.306-.075.467-.094a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93ZM3.75 21V6.932l14.063 14.063L12 18.088l-7.165 3.583A.75.75 0 0 1 3.75 21Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          )}
        </button>
      </div>
    </li>
  );
}
