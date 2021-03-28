import { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case "ERROR":
      return {
        ...state,
        error: action.error,
      };
    default:
      throw new Error("지원하지 않는 action type입니다.");
  }
}
const initialState = {
  users: null,
  loading: false,
  error: null,
};

function useAsync(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", users: data });
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  };

  useEffect(() => {
    if (skip) return;
    fetchData();
    // eslint 설정을 다음 줄에서만 비활성화
    // eslint-disable-next-line
  }, deps);

  return [state, fetchData];
}

export default useAsync;
