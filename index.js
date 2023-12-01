import express from 'express';
import { createServer } from 'node:http';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import {Server} from 'socket.io'

const PORT = 4200;
const app = express();
const server = createServer(app);
const socket = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));
socket.on('connection', (socket)=>{
  console.log("socket");
})

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'), (error)=> error);
});

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});