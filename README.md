# NK Klassement 2026

Live klassementtool voor het NK Sprint & NK Allround schaatsen 2026 in Thialf, Heerenveen.

## Features

- **Live data** via `live-api.schaatsen.nl` (CORS proxy, auto-polling elke 45s)
- **Klassement** met juiste rangschikking (meeste afstanden eerst, dan laagste punten)
- **Afstandsview** met live sidebar-klassement en startlijst-ritnummers
- **Head-to-Head** vergelijking met mirror-tabel
- **Overzicht** dashboard met cross-toernooi data
- **Kwalificatie** berekening voor slotafstand (allround)
- **Handmatige invoer** via modal (per rijder of plakken)
- **Athlete popup** met persoonlijke statistieken
- **CSV export**
- **URL hash** behoudt pagina bij refresh

## Tijdnotatie

- Onder 1 minuut: `38.955` (punt als decimaal)
- Boven 1 minuut: `4:19,650` (komma als decimaal, Nederlands)

## Deelnemers

80 schaatsers totaal uit officiële KNSB deelnemerslijsten:
- NK Sprint: 20 vrouwen + 20 mannen
- NK Allround: 20 vrouwen + 20 mannen

Startlijsten (zaterdag) uit Sportity/KNSB PDFs.

## Gebruik

Open `index.html` in een browser, of deploy naar GitHub Pages.

## Databron

API: `https://live-api.schaatsen.nl/events/{eventId}/competitions/{compId}/results/?inSeconds=1`

CORS proxies: corsproxy.io, allorigins.win, codetabs.com (fallback chain).
