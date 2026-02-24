require('dotenv').config();

const app = require('./app');
const connectDB = require('./database/connectDb');
const { PORT } = require('./config/env.config');

// ================= START SERVER =================
async function startServer() {
  try {
    // Connect Database
    await connectDB();
    console.log('✅ Database connected successfully');

    // Start Server
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
  console.log('\n🛑 Shutting down server...');
  server.close(() => {
    console.log('💤 Server stopped');
    process.exit(0);
  });
}

startServer();