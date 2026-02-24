require('dotenv').config();

const app = require('./app');
const connectDB = require('./database/connectDb');
const { PORT } = require('./config/env.config');

async function startServer() {
  try {
   
    await connectDB();
    console.log(' Database connected successfully');

  
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

    process.on('SIGINT', () => shutdown(server));
    process.on('SIGTERM', () => shutdown(server));

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

function shutdown(server) {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server stopped');
    process.exit(0);
  });
}

startServer();