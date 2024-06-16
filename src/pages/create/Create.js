import { useEffect, useRef, useState } from "react";
import "./Create.css";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Create = () => {
  //새 레시피 작성시 제목, 요리방법, 요리시간
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  //요리재료와 요리재료들 배열 추가
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(); //리액트에서 선택방법
  // postData메서드로 서버로 보낼 데이터를 입력하면 요청됨
  const { postData, data } = useFetch("http://localhost:3030/recipes", "POST");
  const navigate = useNavigate(); //라우트 이동 객체
  // 서버에 post요청후 data가 리턴되면(저장완료) => 홈으로 리다이렉트
  useEffect(() => {
    if (data) navigate("/");
  }, [data, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault(); //기존 이벤트 중지
    postData({ title, method, cookingTime: cookingTime + "분", ingredients });
  };
  const handleAdd = (e) => {
    e.preventDefault(); //기존 이벤트 중지
    const ing = newIngredient.trim(); //공백 제거
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prev) => [...prev, ing]);
    }
    setNewIngredient("");
    ingredientInput.current.focus(); //커서를 입력창에 위치
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

        {/* recipe ingredients here */}
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
        </label>
        <p>
          재료들 :{" "}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

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
