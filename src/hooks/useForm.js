import { useReducer } from "react";

const useForm = (initialState) => {
  const FORM_ACTIONS = {
    setValue: "SET_VALUE",
    submit: "SUBMIT",
    reset: "RESET",
  };
  
  const reducer = (state, action) => {
    switch (action?.type) {
      case "SET_VALUE":
        return { ...state, [action.payload.field]: action.payload.value };
      case "SUBMIT":
        return { ...initialState };
      case "RESET":
        return { ...initialState };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    return dispatch({
      type: FORM_ACTIONS.setValue,
      payload: {
        field: name,
        value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch({ type: FORM_ACTIONS.submit });
  };

  const handleReset = (e) => {
    e.preventDefault();
    return dispatch({ type: FORM_ACTIONS.reset });
  };

  return [
    state,
    {
      onChange: handleChange,
      onSubmit: handleSubmit,
      onReset: handleReset,
    },
  ];
};

export default useForm;
