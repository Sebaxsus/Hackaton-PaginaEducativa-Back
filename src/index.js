import app from "./app";
import { getConfig } from "./config";

const config = getConfig;

const port = config.connection.PORT;

app.listen(port, console.log(`Server online, http://localhost:${port}`));
