import { server } from "./server/Server";
import "dotenv/config.js";

server.listen(process.env.PORT || 3333, () => {
  console.log(`Server is running on port ${process.env.PORT || 3333}`);
});
