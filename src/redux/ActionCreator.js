import axios from "axios";
import { FETCH_LIST } from "./Action";

export const fetchList = (list) => {
    return {
      type: FETCH_LIST,
      payload:list
    };
  };
