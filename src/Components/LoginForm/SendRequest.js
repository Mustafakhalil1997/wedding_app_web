const sendRequest = async (user, type) => {
  let url;
  if (type === "LOGIN") {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAioK_0pdMEniIqmQ97K2HkmaaYWoSo8Wk";
  } else if ((type = "SIGNUP")) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAioK_0pdMEniIqmQ97K2HkmaaYWoSo8Wk";
  }

  const request = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      ...user,
      returnSecureToken: true,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });

  return request;
};

export default sendRequest;
