# 🔒 Konfigurationsverwaltung mit Dotenv (Geheimnisse sichern)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Dotenv](https://img.shields.io/badge/Geheimnisse-Dotenv-DEA584?style=flat-square)
![Express.js](https://img.shields.io/badge/Framework-Express-000000?style=flat-square&logo=express&logoColor=white)

## Projektübersicht
Dieses Projekt demonstriert die kritische Best Practice der sicheren **Konfigurationsverwaltung** in Node.js. Es verwendet das beliebte **`dotenv`**-Paket, um sensible Daten (*Geheimnisse* / Secrets) wie API-Schlüssel oder Datenbank-URLs aus der Codebasis fernzuhalten und sie stattdessen über eine lokale **`.env`**-Datei zu laden.

Dies ist unerlässlich, um zu verhindern, dass vertrauliche Informationen versehentlich auf GitHub veröffentlicht werden.

## 🛠️ Verwendete Technologien
* **Node.js** & **Express.js**: Bereitstellung des Basis-Servers.
* **dotenv**: Lädt Umgebungsvariablen aus der `.env`-Datei in `process.env`.

## 🔑 Hauptfunktionalitäten
* **Geheimnisverwaltung:** Demonstriert, wie `API_SCHLUESSEL` und `DB_HOST` über `process.env` abgerufen werden.
* **Fallback-Werte:** Zeigt die Verwendung von Fallback-Werten (`|| 'STANDARD_SCHLUESSEL'`), falls eine Variable nicht in der `.env`-Datei definiert ist.
* **Sicherheitskonzept:** Betont, dass die `.env`-Datei nicht Teil der Versionskontrolle sein sollte. 

## ⚙️ Installation und Ausführung

Dieses Projekt benötigt nur die folgenden Schritte, da der gesamte Code in einer Datei enthalten ist (`index.js`).

1.  **Dateien erstellen:** Erstellen Sie die folgenden drei Dateien in Ihrem Projektordner:
    * `package.json` (Nachdem Sie `npm init -y` ausgeführt haben).
    * **`.env`** (Ihre geheime Konfigurationsdatei).
    * **`index.js`** (Der gesamte Server-Code).

2.  **Abhängigkeiten installieren:**
    Führen Sie diesen Befehl aus, um alle notwendigen Pakete zu installieren:
    ```bash
    npm install dotenv express
    ```

3.  **Die `.env`-Datei befüllen:**
    Erstellen Sie die Datei `.env` mit Ihren Konfigurationsvariablen (z.B. `SERVER_PORT=8080`).

4.  **Server starten:**
    ```bash
    node index.js
    ```
    Der Server wird gestartet und die in der `.env`-Datei definierten Variablen werden in der Konsole ausgegeben.

Wenn Sie mehr erfahren möchten, besuchen Sie https://patricketsesfantomes.com/

