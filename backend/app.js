const express = require("express");
const cors = require("cors");
const shoppingListRoutes = require("../backend/src/app/routes/shoppingListRoutes");

const app = express();

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Register routes
app.use("/shopping-list", shoppingListRoutes);

app.get("/", (req, res) => {
  res.send("Welcome");
})

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ uuAppErrorMap: { errorType: "InternalError", message: "An unexpected error occurred." } });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));