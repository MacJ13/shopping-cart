import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useStore } from "../../context/StoreContext";
import style from "./SearchForm.module.scss";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { searchInput, setSearchInput, hideMobileMenu } = useStore();

  const searchTerm = searchParams.get("search") || "";

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData);

    if (!obj.search || obj.search === searchTerm) return;
    setSearchInput("");

    hideMobileMenu();

    navigate({ pathname: "/shop", search: `${createSearchParams(obj)}` });
  };

  return (
    <form onSubmit={onSubmit} className={style.form}>
      <button className={style.btn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="100%"
          height="100%"
        >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
        </svg>
      </button>
      <label className={style.label} htmlFor="search">
        <input
          className={style.field}
          type="text"
          id="search"
          name="search"
          value={searchInput}
          onChange={onChange}
          placeholder="Enter searching product..."
        />
      </label>
    </form>
  );
};

export default SearchForm;
