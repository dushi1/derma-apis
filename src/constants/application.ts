const base1 = "/api/v1";

export default {
  url: {
    base1,
  },
  authorizationIgnorePath: [
    `${base1}/user/auth/login`,
    `${base1}/user/auth/register`,
  ],
};
