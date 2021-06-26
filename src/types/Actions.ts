import { SUBMIT_FORM } from "../store/constants/SubmitConstant";
import { Form } from "./Form";

export interface SubmitForm {
  type: typeof SUBMIT_FORM;
  payload: Form;
}

// If we have another actions we must add here.
export type FormActionTypes = SubmitForm;
