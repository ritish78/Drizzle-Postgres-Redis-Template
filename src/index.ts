import app from "./server";
import { EXPRESS_SERVER_PORT } from "./config";

app.listen(EXPRESS_SERVER_PORT, () => {
  console.log("Server ready on port:", EXPRESS_SERVER_PORT);
});
