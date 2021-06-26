import { SUBMIT_FORM } from "../constants/SubmitConstant";
import { Form } from "../../types/Form";

export const submitForm = (form: Form) => {
  return {
    type: SUBMIT_FORM,
    payload: form,
  };
};
