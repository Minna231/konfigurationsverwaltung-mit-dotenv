// Datei: index.js

// 1. Laden Sie dotenv, um die Umgebungsvariablen aus der .env-Datei zu laden
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

// --- Konfigurationsvariablen aus Umgebungsvariablen abrufen ---
// (Mengambil variabel konfigurasi dari environment variables)
const API_SCHLUESSEL = process.env.API_SCHLUESSEL || 'STANDARD_SCHLUESSEL';
const DB_HOST = process.env.DB_HOST || 'standard-db-url.com';
const SERVER_PORT = process.env.SERVER_PORT || 3000;

// ------------------------------------------------------------------
// ROUTING UND LOGIK
// ------------------------------------------------------------------

app.get('/', (anfrage, antwort) => {
    // Zeigt KEINE sensitiven Daten (wie den Schlüssel) im Browser an!
    // (JANGAN tampilkan data sensitif (seperti kunci) di browser!)
    antwort.send(`
        <h1>Konfigurations-API läuft</h1>
        <p>Datenbank-Host: <strong>${DB_HOST}</strong></p>
        <p>Port: <strong>${SERVER_PORT}</strong></p>
        <p>API-Schlüssel wurde geladen: <strong>${API_SCHLUESSEL.substring(0, 5)}...</strong></p>
        <p>Prüfen Sie die Konsole, um alle geladenen Variablen zu sehen.</p>
    `);
});

app.listen(SERVER_PORT, () => {
    console.log("-----------------------------------------");
    console.log(`✅ Server gestartet auf Port ${SERVER_PORT}`);
    console.log("--- Geladene Umgebungsvariablen ---");
    // Wichtig: Zeigt, dass dotenv funktioniert hat
    console.log(`API_SCHLUESSEL (geladen): ${API_SCHLUESSEL}`);
    console.log(`DB_HOST (geladen): ${DB_HOST}`);
    console.log(`SERVER_PORT (geladen): ${SERVER_PORT}`);
    console.log("-----------------------------------------");
});
