import express from 'express';
import { createServer } from 'node:http';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';

const PORT = 4200;
const app = express();
const server = createServer(app);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'), (error)=> error);
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});