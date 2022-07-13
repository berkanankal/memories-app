import API from "./index";

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);

export const createPost = (formInformations) => {
  return API.post("/posts", formInformations, {
    headers: {
      Authorization: `Bearer: ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });
};

export const deletePost = (id) => {
  return API.delete(`/posts/${id}`, {
    headers: {
      Authorization: `Bearer: ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });
};

export const likePost = (id) => {
  return API.put(
    `/posts/${id}/like`,
    {},
    {
      headers: {
        Authorization: `Bearer: ${JSON.parse(localStorage.getItem("token"))}`,
      },
    }
  );
};

export const updatePost = (id, post) => {
  return API.put(`/posts/${id}`, post, {
    headers: {
      Authorization: `Bearer: ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });
};
