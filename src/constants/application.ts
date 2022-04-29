const base = "/api";

export default {
  url: {
    base,
  },
  authorizationIgnorePath: [
    `${base}/user/auth/login`,
    `${base}/user/auth/register`,
  ],
};
