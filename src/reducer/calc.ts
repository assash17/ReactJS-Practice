const PLUS = "calc/PLUS" as const;
const MINUS = "calc/MINUS" as const;
const MUTIPLE = "calc/MUTIPLE" as const;
const DEVIDE = "calc/DEVIDE" as const;

export const plus = (first: number, second: number) => {
  return { type: PLUS, payload: { first, second } };
};
export const minus = (first: number, second: number) => {
  return { type: MINUS, payload: { first, second } };
};
export const multiple = (first: number, second: number) => {
  return { type: MUTIPLE, payload: { first, second } };
};
export const divide = (first: number, second: number) => {
  return { type: DEVIDE, payload: { first, second } };
};

type Action =
  | ReturnType<typeof plus>
  | ReturnType<typeof minus>
  | ReturnType<typeof multiple>
  | ReturnType<typeof divide>;

type State = {
  result: number;
};
const initialState: State = {
  result: 0,
};

function calc(state: State = initialState, action: Action): State {
  switch (action.type) {
    case PLUS:
      return { ...state, result: action.payload.first + action.payload.second };
    case MINUS:
      return { ...state, result: action.payload.first - action.payload.second };
    case MUTIPLE:
      return { ...state, result: action.payload.first * action.payload.second };
    case DEVIDE:
      return { ...state, result: action.payload.first / action.payload.second };
    default:
      return state;
  }
}

export default calc;
