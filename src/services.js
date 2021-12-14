import axios from "axios";

const baseURL =
  /* "https://backendssbssn2.osc-fr1.scalingo.io" ||  */ "http://localhost:5000";

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
        Authorization: `Bearer ${jwt}`,
      },
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

  displayAllPost(body) {
    let jwt = localStorage.getItem("jwt");
    return url.get("/users/display-all-post", body, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  },

  setLike(body) {
    let jwt = localStorage.getItem("jwt");
    return url.post("/users/like-post", body, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  },

  editDescription(body) {
    let jwt = localStorage.getItem("jwt");
    return url.put("/users/edit-user-description", body, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  },

  editUserPic(formData) {
    let jwt = localStorage.getItem("jwt");
    return url.post("/users/upload", formData, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default service;
