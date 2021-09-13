// eslint-disable-next-line react/prefer-stateless-function
import { axios } from "../../../connection/axios";
export default function operate(numberOne, numberTwo, operation) {
  return axios.post("/calculate", { numberOne, numberTwo, operation });
}
