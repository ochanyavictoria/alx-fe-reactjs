import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => {
          const isFavorite = favorites.includes(recipe.id);
          return (
            <div key={recipe.id} style={{ marginBottom: '1rem' }}>
              <h3>
                <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
              <button
                onClick={() =>
                  isFavorite
                    ? removeFavorite(recipe.id)
                    : addFavorite(recipe.id)
                }
              >
                {isFavorite ? '💔 Remove Favorite' : '❤️ Add to Favorites'}
              </button>
            </div>
          );
        })
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
