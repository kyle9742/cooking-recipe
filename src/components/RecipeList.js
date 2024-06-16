import { Link } from "react-router-dom";
import "./RecipeList.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const RecipeList = ({ recipes }) => {
  const { mode } = useContext(ThemeContext);
  //데이터가 없을경우 배열길이가 0이므로 바로 return (종료)
  if (recipes.length === 0) {
    return <div className="error">검색된 레시피가 없습니다.</div>;
  }
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>요리하기</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
