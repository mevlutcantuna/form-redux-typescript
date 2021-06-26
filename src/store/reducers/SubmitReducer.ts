import { Form } from "../../types/Form";
import { FormActionTypes } from "../../types/Actions";
import { SUBMIT_FORM } from "../constants/SubmitConstant";

const initialState: Form[] = [];

const SubmitReducer = (
  state = initialState,
  action: FormActionTypes
): Form[] => {
  switch (action.type) {
    case SUBMIT_FORM:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default SubmitReducer;
