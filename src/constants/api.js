export const config = {
  protocol: "https",
  host: "colors-clash-api.herokuapp.com",
};

const baseUrlPart = `${config.protocol}://${config.host}`;

export default {
  login() {
    return `${baseUrlPart}/auth`;
  },

  register() {
    return `${baseUrlPart}/users/create`;
  },

  challenges() {
    return `${baseUrlPart}/challenges`;
  },

  challenge(id) {
    return `${baseUrlPart}/challenges/${id}`;
  },
};
