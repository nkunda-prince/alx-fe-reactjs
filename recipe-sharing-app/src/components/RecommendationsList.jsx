import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore(
    (state) => state.recommendations
  );
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Recommended For You</h2>

      <button onClick={generateRecommendations}>
        Generate Recommendations
      </button>

      {recommendations.length === 0 && (
        <p>No recommendations yet.</p>
      )}

      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <h4>{recipe.title}</h4>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
