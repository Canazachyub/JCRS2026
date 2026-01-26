# JCRS Arequipa 2026

**XXIX Jornada Científica Regional Sur - Arequipa 2026**

Sitio web oficial del evento científico organizado por CIEM 2026.

**Sitio en vivo:** https://canazachyub.github.io/JCRS2026/

## Información del Evento

- **Fechas:** 06 al 11 de Marzo de 2026
- **Lugar:** Arequipa, Perú
- **Temática:** "Avances en el Manejo Integral de Enfermedades Crónicas, Infecciosas y Oncológicas"
- **Organizador:** CIEM 2026

## Tecnologías

- **Frontend:** React 18 + Vite + TailwindCSS
- **Animaciones:** Framer Motion
- **Backend:** Google Apps Script + Google Sheets
- **Deploy:** GitHub Pages con GitHub Actions

## Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/
│   │   ├── common/        # Navbar, Footer, Button, Card, Modal
│   │   ├── landing/       # Hero, Countdown, SocialLinks, Sponsors
│   │   └── inscripcion/   # Formularios de inscripción
│   ├── pages/
│   │   ├── Home.jsx       # Página principal
│   │   ├── Bases.jsx      # Bases científicas
│   │   ├── Programa.jsx   # Cronograma del evento
│   │   ├── Inscripcion.jsx
│   │   ├── Concurso.jsx
│   │   └── Contacto.jsx
│   ├── services/          # Conexión con API
│   ├── utils/
│   │   └── constants.js   # Configuración central
│   └── styles/
├── .github/workflows/     # GitHub Actions para deploy
└── public/
```

## Configuración Central

Toda la información del evento se encuentra en `src/utils/constants.js`:

- Fechas del evento
- Links de redes sociales
- URLs de Google Forms
- URLs de Google Drive (bases científicas)
- Imágenes del carrusel

## Cómo Hacer Modificaciones

### 1. Clonar el repositorio

```bash
git clone https://github.com/Canazachyub/JCRS2026.git
cd JCRS2026
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

### 4. Hacer cambios

#### Cambiar información del evento
Edita `src/utils/constants.js`:

```javascript
export const EVENT_CONFIG = {
  name: 'XXIX Jornada Científica Regional Sur',
  dates: {
    start: '2026-03-06',
    end: '2026-03-11',
    formatted: '06 al 11 de Marzo de 2026',
  },
  // ...
}
```

#### Cambiar imágenes del carrusel
Edita el array `IMAGES.carousel` en `src/utils/constants.js`

#### Cambiar links de redes sociales
Edita `LINKS.social` en `src/utils/constants.js`

#### Cambiar bases científicas (Google Drive)
Edita `BASES_CIENTIFICAS` en `src/utils/constants.js`

#### Cambiar formularios de casos clínicos
Edita `FORMULARIOS_CASOS_CLINICOS` en `src/utils/constants.js`

### 5. Subir cambios

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

El deploy se ejecutará automáticamente via GitHub Actions.

## API Backend (Google Apps Script)

La API está desplegada en Google Apps Script y conectada a Google Sheets.

**URL de la API:**
```
https://script.google.com/macros/s/AKfycbxbPsbQ1mrRLAQRWD3T_koM4ZHCQ0kNPhvK876p_NQVLsx-Ac3M_Kgw_omgNhHxTbmy7g/exec
```

### Endpoints disponibles

| Acción | Método | Descripción |
|--------|--------|-------------|
| `inscripcion/individual` | POST | Registrar inscripción individual |
| `inscripcion/corporativo` | POST | Registrar inscripción corporativa |
| `inscripcion/consultar` | GET | Consultar estado por DNI |
| `pagos/registrar` | POST | Registrar pago |
| `estadisticas` | GET | Obtener estadísticas |

## Variables de Entorno

Crear archivo `.env` basado en `.env.example`:

```env
VITE_API_URL=https://script.google.com/macros/s/YOUR_ID/exec
VITE_EVENT_DATE=2026-03-06T08:00:00
VITE_EVENT_NAME=JCRS Arequipa 2026
```

## Redes Sociales

- **Instagram:** [@jcrs_aqp2026](https://www.instagram.com/jcrs_aqp2026/)
- **Facebook:** [XXIX JCRS - AREQUIPA 2026](https://www.facebook.com/jcrs.arequipa.2026)
- **WhatsApp:** [Canal oficial](https://whatsapp.com/channel/0029Vb7YNve6buMDTgM23o3w)
- **Email:** jcrs.socimep@org.com

## Licencia

Este proyecto fue desarrollado para la XXIX Jornada Científica Regional Sur - Arequipa 2026.

---

Desarrollado con Claude Code
