import { server } from './server/server';
import * as dotenv from 'dotenv';

dotenv.config();

if(!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

server.listen(PORT, () => console.log(`API loading on PORT ${ PORT }`));