import { postServerData } from "../helper/helper";
import * as Action from "../redux/result_reducer";

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};
export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.log(error);
  }
};

/** insert user data */
export const usePublishResult = (resultData) => {
  const { result, username } = resultData;
  if (result !== [] && !username) {
    console.log("Couldn't get Result");
    return;
  }

  postServerData(`${process.env.PORT}/api/result`, resultData)
    .then((data) => {})
    .catch((error) => {
      console.log(error);
    });
};
