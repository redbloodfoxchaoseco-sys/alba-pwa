# ALBA · Kaelen 7.2

PWA del proyecto ALBA: shell instalable, sin dependencias ni build, que funciona
offline desde la primera carga.

Procedencia: el repositorio original `alba-core` indica que el código se importó de
`alba.core.v1.2.zip` (Google Drive); no se ha verificado de forma independiente.

## Estructura

| Archivo | Función |
| --- | --- |
| `index.html` | shell: topbar, pestañas, contenedor y footer |
| `app.js` | arranque, pestañas, registro del service worker y estado de sesión |
| `modules.js` | módulos de contenido |
| `albaGraph.js` | motor de grafo topológico |
| `styles.css` | estilos (tema oscuro, `#0a0c15`) |
| `sw.js` | service worker: precache y estrategia network-first con reserva en caché |
| `manifest.json` | manifiesto PWA: nombre, scope, iconos, colores |
| `icons/` | iconos PNG 192/512 y variantes maskable, más `apple-touch-icon` 180 |

## Ejecutar en local

El service worker exige `http://` o `https://`; abrir el archivo con `file://` no
lo registra.

```bash
python3 -m http.server 8099
# http://127.0.0.1:8099
```

## Instalar

- **Android / Chrome**: menú → «Instalar aplicación» o «Añadir a pantalla de inicio».
- **iOS / Safari**: Compartir → «Añadir a pantalla de inicio».
- **Escritorio**: icono de instalación en la barra de direcciones.

Tras la primera carga, el precache deja la app operativa sin red.

## Offline y versiones

`sw.js` precarga en `ASSETS` todo lo necesario y sirve desde caché cuando falla la
red, con `index.html` como reserva para navegaciones.

Al cambiar cualquier archivo de `ASSETS`, sube el sufijo de `CACHE`
(`alba-v7.2-1` → `alba-v7.2-2`). Si no lo haces, los clientes siguen viendo la
copia antigua hasta que expire. `activate` borra las cachés con otro nombre.

## Despliegue

`.github/workflows/ci.yml` valida la sintaxis de los scripts, el manifiesto y que
todo lo que precarga el service worker exista. Se ejecuta en cada push y PR.

`.github/workflows/pages.yml` publica la raíz en GitHub Pages, pero solo si defines
la variable de repositorio `PAGES_ENABLED` con valor `true` y Pages está activado
(en un repositorio privado requiere un plan que lo permita). Si no lo está,
publica la carpeta en cualquier hosting estático: no hay build ni dependencias.

## Licencia

MIT — ver `LICENSE`.
