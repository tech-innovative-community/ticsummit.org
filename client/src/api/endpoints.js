const host = "https://milesmorales.herokuapp.com";

export const registerRoute = `${host}/api/auth/register`;
export const cloudinary =
  "https://api.cloudinary.com/v1_1/zenithnoble/image/upload";
export const loginRoute = `${host}/api/auth/login`;
export const post = `${host}/api/post`;
export const use = `${host}/api/auth/users`;
export const remove = `${host}/api/auth/`;
export const update = "https://milesmorales.herokuapp.com/api/posts";

export const toastOptions = {
  position: "top-right",
  autoClose: 3000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};
