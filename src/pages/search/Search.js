import { useLocation } from "react-router-dom";
import "./Search.css";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

// "search?q=값" 에서 q값을 받음.
const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q"); //q로 전달되는 파라미터
  //서버로 검색하기 위한 주소
  const url = "http://localhost:3030/recipes?q=" + query;
  console.log(url);
  const { data, isPending, error } = useFetch(url);
  return (
    <div>
      <h2 className="page-title">"{query}"를 포함하는 레시피는 </h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">로딩중...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Search;
