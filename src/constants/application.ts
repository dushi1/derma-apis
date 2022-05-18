const base1 = "/api/v1";

export default {
  url: {
    base1,
  },
  authorizationIgnorePath: [
    `${base1}/login`,
    `${base1}/masterdata`,
  ],
  timers: '100d'
};
