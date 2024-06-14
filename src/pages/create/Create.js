import { useFetch } from "../../hooks/useFetch";
import "./Create.css";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef();
  const { postData, data } = useFetch("http://localhost:3030/recipes", "POST");
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ title, method, cookingTime: cookingTime + "분", ingredients });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prev) => [...prev, ing]);
    }

    setNewIngredient("");
    ingredientInput.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">새 레시피를 추가하세요</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>요리 제목:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>요리 재료:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">
              사용
            </button>
          </div>

          <p>
            재료들 :{" "}
            {ingredients.map((i) => (
              <em key={i}>{i}, </em>
            ))}
          </p>
        </label>

        <label>
          <span>요리 방법:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>쿠킹 타임 (분):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">추가</button>
      </form>
    </div>
  );
};

export default Create;
