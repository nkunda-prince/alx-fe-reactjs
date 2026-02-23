import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);

  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
const favorites = useRecipeStore((state) => state.favorites);
const addFavorite = useRecipeStore((state) => state.addFavorite);
const removeFavorite = useRecipeStore((state) => state.removeFavorite);

const isFavorite = favorites.includes(recipe.id);
  );

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <Link to="/">← Back</Link>

      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <button
  onClick={() =>
    isFavorite
      ? removeFavorite(recipe.id)
      : addFavorite(recipe.id)
  }
  style={{
    marginBottom: "10px",
    backgroundColor: isFavorite ? "orange" : "green",
    color: "white",
  }}
>
  {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
</button>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
