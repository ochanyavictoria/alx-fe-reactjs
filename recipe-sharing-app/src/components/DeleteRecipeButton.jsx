import useRecipeStore from "../recipeStore";

function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button
      onClick={() => {
        deleteRecipe(recipeId);
        alert("Recipe deleted!");
      }}
      style={{ marginTop: "10px", color: "red" }}
    >
      Delete Recipe
    </button>
  );
}

export default DeleteRecipeButton;
