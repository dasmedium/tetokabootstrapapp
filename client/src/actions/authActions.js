import { TEST_DIPATCH } from "./types";
// Register User
export const registerUser = userData => {
  return {
    type: TEST_DIPATCH,
    payload: userData
  };
};
