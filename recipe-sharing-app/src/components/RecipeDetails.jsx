import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'

/**
 * Accepts optional prop `recipeId` (per spec example) but
 * also supports route param via useParams for real routing.
 */
const RecipeDetails = ({ recipeId }) => {
  const params = useParams()
  const id = recipeId ?? Number(params.id)

  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === id)
  )

  const [editing, setEditing] = useState(false)

  if (!recipe) return <p>Recipe not found.</p>

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {!editing ? (
        <button onClick={() => setEditing(true)}>Edit Recipe</button>
      ) : (
        <EditRecipeForm id={id} onDone={() => setEditing(false)} />
      )}

      <div style={{ marginTop: '1rem' }}>
        <DeleteRecipeButton id={id} />
      </div>
    </div>
  )
}

export default RecipeDetails
