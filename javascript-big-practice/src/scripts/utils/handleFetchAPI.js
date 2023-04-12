import { API_MSG } from "../constants/messages";
import { URL_API, ENDPOINTS } from "../constants/http";

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
    const message = `${API_MSG.GET} ${err}`;
    alert(message);
  }
};
