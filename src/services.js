import axios from "axios";

const baseURL = "http://localhost:5000";

const url = axios.create({
  baseURL,
});

const service = {
  displayAllUsers() {
    return url.get("/users/complete-listing");
  },

  signup(body) {
    return url.post("/users/signup", body);
  },
  logUsers(body) {
    return url.post("/users/login", body);
  },

  checkToken() {
    let jwt = localStorage.getItem("jwt");
    return url.get("/users/check-token", {
      headers: {
        Authorization: `Bearer ${jwt}`}
    });
  },
  postByUser(body) {
    let jwt = localStorage.getItem("jwt");
    return url.post("/users/post-by-user", body, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  },

  displayAllPost () {
    return url.get("/users/display-all-post")
  }
};

export default service;
