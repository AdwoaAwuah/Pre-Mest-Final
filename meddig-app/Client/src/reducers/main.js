export const appState = {
  isLoading: true,
  isAuthenticated: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
      };
    case "SET_AUTH":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
