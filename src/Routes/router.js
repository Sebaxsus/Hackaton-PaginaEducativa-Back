import Auth from "./Auth";
export default function (app) {
  //auth and roles
  app.use("/api/auth", Auth);
}
