import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// For Vercel compatibility
const isVercel = process.env.VERCEL === "1";

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Serve static files from dist/public in production
  let staticPath: string;

  if (isVercel) {
    // Vercel deployment
    staticPath = path.resolve(__dirname, "..", "public");
  } else if (process.env.NODE_ENV === "production") {
    // Local production
    staticPath = path.resolve(__dirname, "public");
  } else {
    // Development
    staticPath = path.resolve(__dirname, "..", "client", "dist");
  }

  console.log(`Serving static files from: ${staticPath}`);

  // Serve static files
  app.use(express.static(staticPath, {
    maxAge: "1d",
    etag: false,
  }));

  // Error handling middleware
  app.use((err: any, _req: any, res: any, _next: any) => {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    res.setHeader("Cache-Control", "no-cache");
    res.sendFile(indexPath, (err) => {
      if (err) {
        console.error("Error sending index.html:", err);
        res.status(404).json({ error: "Not found" });
      }
    });
  });

  const port = parseInt(process.env.PORT || "3000", 10);
  const host = "0.0.0.0";

  server.listen(port, host, () => {
    console.log(`✓ Server running on http://localhost:${port}/`);
    console.log(`✓ Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`✓ Vercel: ${isVercel ? "yes" : "no"}`);
    console.log(`✓ Static path: ${staticPath}`);
  });
}

// Start server
if (import.meta.url === `file://${process.argv[1]}`) {
  startServer().catch((error) => {
    console.error("✗ Failed to start server:", error);
    process.exit(1);
  });
}

export default startServer;
