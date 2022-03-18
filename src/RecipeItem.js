import React from "react";

export default function RecipeItem({ recipe, deleteRecipe }) {
    const { name, cuisine, photo, ingredients, preparation } = recipe;
  return (
    <tr>
      <td className="content_td">
         <p>{name}</p>
      </td>
      <td className="content_td">
         <p>{cuisine}</p>
      </td>
      <td className="content_td">
         <img src={photo} alt="food img" />
      </td>
      <td className="content_td">
         <p>{ingredients}</p>
      </td>
      <td className="content_td">
         <p>{preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );
}
