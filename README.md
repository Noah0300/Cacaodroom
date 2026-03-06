# De Cacaodroom Website

Een stijlvolle, responsieve multi-page website voor **De Cacaodroom**, gericht op een warme en luxe chocoladewereld.

## Inhoud
- Home (`index.html`)
- Over ons (`over-ons.html`)
- Onze producten (`producten.html`)
- Chocolade ervaringen (`ervaringen.html`)
- Winkel (`winkel.html`)
- Contact (`contact.html`)

## Belangrijkste features
- Luxe visuele stijl met chocolade- en goudtinten.
- Prominente branding met een lokaal SVG-logo (`assets/logo-cacaodroom.svg`).
- Responsieve navigatie met mobiel menu.
- Productfilters in de winkel (smaak, type, verpakking).
- Formulieren met directe bevestigingsmelding:
  - Reserveren workshop
  - Checkout
  - Contact
- Basale SEO metadata per pagina.
- Toegankelijkheidsverbeteringen zoals skip-link en `aria-live` feedback.

## Projectstructuur
```text
.
├── assets/
│   └── logo-cacaodroom.svg
├── contact.html
├── ervaringen.html
├── index.html
├── over-ons.html
├── producten.html
├── script.js
├── styles.css
└── winkel.html
```

## Lokaal draaien
1. Start een lokale server:
   ```bash
   python -m http.server 4173
   ```
2. Open in je browser:
   `http://localhost:4173/index.html`

## Validatie
- JavaScript syntax check:
  ```bash
  node --check script.js
  ```

## Volgende stappen (optioneel)
- Koppeling met echte backend/API voor reserveringen en bestellingen.
- Integratie van echte betaalprovider (bijv. Mollie/Stripe/PayPal).
- Conversie naar component-based framework (bijv. Next.js) voor schaalbaarheid.
