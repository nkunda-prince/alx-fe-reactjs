import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const updateRecipe: (updatedRecipe) =>
  set((state) => {
    const updatedRecipes = state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes,
    };
  }),
  return (
    <button
      onClick={handleDelete}
      style={{ marginTop: "10px", backgroundColor: "red", color: "white" }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
