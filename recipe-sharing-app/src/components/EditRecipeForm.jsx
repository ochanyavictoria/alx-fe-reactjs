import { useState, useEffect } from 'react'
import { useRecipeStore } from './recipeStore'

const EditRecipeForm = ({ id, onDone }) => {
  const { recipes, updateRecipe } = useRecipeStore((s) => ({
    recipes: s.recipes,
    updateRecipe: s.updateRecipe,
  }))

  const recipe = recipes.find((r) => r.id === id)
  const [title, setTitle] = useState(recipe ? recipe.title : '')
  const [description, setDescription] = useState(recipe ? recipe.description : '')

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title)
      setDescription(recipe.description)
    }
  }, [recipe])

  const handleSubmit = (e) => {
    e.preventDefault()
    updateRecipe(id, { title, description })
    onDone?.()
  }

  if (!recipe) return <p>Recipe not found.</p>

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  )
}

export default EditRecipeForm
