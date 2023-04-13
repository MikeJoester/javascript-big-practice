import { API_MESSAGE } from "../constants/messages";
import ENDPOINTS from "../constants/endpoints";

const URL_API = "http://localhost:3000";

const usersURL = URL_API + ENDPOINTS.USERS_URL;

export const getUser = async () => {
  try {
    const res = await fetch(usersURL, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const users = await res.json();
    return users;
  } catch (err) {
    const message = `${API_MESSAGE.GET} ${err}`;
    alert(message);
  }
};
