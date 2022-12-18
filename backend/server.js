// npm modulok
require('dotenv').config();
const express = require('express');

// szerver beállítása
const app = express();
const PORT = process.env.PORT || 3500;

// szerver "figyelőmódba" helyezése
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
