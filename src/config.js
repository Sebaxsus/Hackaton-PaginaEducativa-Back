require("dotenv").config();

export const getConfig = {
  SECRET: process.env.SECRET,
  connection: {
    PORT: process.env.PORT,
  },
  HOST: process.env.HOST,
};
