// Import the Vite server or your application logic
import { createServer } from 'vite';

(async () => {
  try {
    const server = await createServer({
      server: { port: 3000 }
    });
    await server.listen();
    console.log('Server is running at http://localhost:3000');
  } catch (error) {
    console.error('Failed to start the server:', error);
  }
})();
