import { Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes)

  if (recipes.length === 0) return <p>No recipes yet. Add one!</p>

  return (
    <div>
      {recipes.map((r) => (
        <div key={r.id} style={{ marginBottom: '1rem' }}>
          <h3>
            <Link to={`/recipes/${r.id}`}>{r.title}</Link>
          </h3>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
