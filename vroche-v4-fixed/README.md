# Vroche — Landing Page (v2)

Landing editorial fashion-tech para Vroche.
Stack: **React 18 + Vite 5 + Tailwind 3 + Framer Motion**.

---

## 🚀 Deploy: GitHub → Vercel (paso a paso)

### 1. Subir el proyecto a GitHub

Desde la carpeta `vroche-new/`, abre la terminal y ejecuta:

```bash
git init
git add .
git commit -m "Initial commit: Vroche landing v2"
git branch -M main
```

Luego crea un repo vacío en GitHub (sin README, sin gitignore, sin license — los traemos nosotros).
Copia la URL que te da y conecta:

```bash
git remote add origin https://github.com/TU-USUARIO/vroche-landing.git
git push -u origin main
```

### 2. Conectar con Vercel

1. Entra en [vercel.com](https://vercel.com) y haz login con tu cuenta de GitHub.
2. Click en **"Add New… → Project"**.
3. Selecciona el repo `vroche-landing` que acabas de subir.
4. Vercel detectará automáticamente que es un proyecto **Vite**:
   - Framework Preset: `Vite` ✓
   - Build Command: `npm run build` ✓
   - Output Directory: `dist` ✓
   - Install Command: `npm install` ✓
5. Click en **"Deploy"**. En ~40s tendrás la URL `vroche-landing.vercel.app`.

> El archivo `vercel.json` ya está incluido y configurado. No tienes que tocar nada.

### 3. Dominio personalizado (opcional)

En el dashboard de Vercel → tu proyecto → **Settings → Domains** → añade `vroche.com` o el dominio que quieras y sigue las instrucciones DNS.

---

## 💻 Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## 🏗️ Build local de producción

```bash
npm run build
npm run preview
```

---

## 📂 Estructura

```
src/
├─ App.jsx                  # composición principal
├─ main.jsx                 # entry point
├─ constants.js             # brand, logos, datos legales
├─ hooks.js                 # useReveal, useMousePosition, useSectionScrollProgress
├─ index.css                # estilos globales + animaciones + tipografía editorial
│
├─ components/
│  ├─ NavBar.jsx            # nav fija + menú móvil
│  ├─ Footer.jsx            # footer + marquee
│  ├─ CookieBanner.jsx      # consent RGPD
│  ├─ icons.jsx             # iconos SVG inline
│  ├─ Garments.jsx          # SVGs de prendas (top, pants, bag, etc.)
│  └─ UI.jsx                # Eyebrow, Tag, Badge, ScrollProgressBar
│
├─ sections/
│  ├─ Hero.jsx              # 01 · hero con cursor-reveal de logos
│  ├─ Manifest.jsx          # 02 · problema (claro)
│  ├─ ScrollStory.jsx       # 03 · sticky flat-lay editorial
│  ├─ Product.jsx           # 04 · grid de features (claro)
│  ├─ Community.jsx         # 05 · feed social (oscuro)
│  ├─ Vision.jsx            # 06 · vision statement (cream)
│  └─ Download.jsx          # 07 · CTA final (oscuro)
│
└─ legal/
   └─ LegalModal.jsx        # privacy, terms, legal notice, cookies
```

## 🎨 Brand

- Mint `#63D7B1` · Coral `#FF5733` · Black `#040806` · White `#FCFFFE`
- Tipografía: DM Serif Display (italic), DM Sans, Roboto, Instrument Serif

## 📝 Notas técnicas

- **Sin librerías de iconos**: todos los iconos son SVGs inline (sin lucide ni libs externas).
- **Prendas custom**: todas las prendas son SVGs construidos a mano (sin imágenes externas).
- **Animaciones nativas**: CSS keyframes + Intersection Observer + custom hooks.
- **A11y**: respeta `prefers-reduced-motion`, focus rings, alt en logos, aria-labels.
- **Mobile-first**: clamp() en tipografías, breakpoints sm/md/lg, menú móvil overlay.
- **RGPD**: cookie banner con consentimiento granular + 4 modales legales (Privacidad, Términos, Aviso Legal, Cookies).

## ⚙️ Variables de entorno

No requiere ninguna. Si en el futuro conectas un backend (waitlist real, analytics):

```bash
# .env.local
VITE_API_URL=https://api.vroche.com
VITE_GA_ID=G-XXXXXXXXXX
```

Y úsalas en código con `import.meta.env.VITE_API_URL`.
