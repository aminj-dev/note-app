export const getInitialState = () => {
  const stored = localStorage.getItem("noteApp");
  return stored ? JSON.parse(stored) : [];
};

export const updateLocalStorage = (state) => {
  localStorage.setItem("noteApp", JSON.stringify(state));
};
