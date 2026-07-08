# Céfiro Parfums — Catálogo estático para GitHub Pages

Catálogo de perfumes 100% estático (HTML + JS). No necesita PHP ni base de datos: todo el contenido se edita en **dos archivos JSON**.

## Cómo editar el catálogo

### 1. Perfumes → [`data/perfumes.json`](data/perfumes.json)
Datos e imagen de cada perfume. Para **agregar** uno, copia un bloque y cambia sus valores:

```json
{
  "id": 22,
  "nombre": "Mi Nuevo Perfume",
  "referencia_inspiracion": "Perfume Original en que se inspira",
  "genero": "Hombre",
  "familia_olfativa": "Ámbar Amaderada",
  "notas_salida": "Bergamota, Limón",
  "notas_corazon": "Jazmín",
  "notas_fondo": "Vainilla, Ámbar",
  "descripcion_emotiva": "Descripción corta y emotiva.",
  "concentracion": "50% + Musk Tahara + Feromonas",
  "imagen_url": "assets/img/products/mi-imagen.avif"
}
```

- `id`: número **único** (no lo repitas).
- `genero`: `Hombre`, `Mujer` o `Unisex` (así funcionan los filtros).
- Las notas van separadas por comas en un solo texto.
- `imagen_url`: sube la imagen a `assets/img/products/` y pon aquí su ruta.
- Para **quitar** un perfume, borra su bloque completo (cuida las comas entre bloques).

### 2. Precios y presentaciones → [`data/precios.json`](data/precios.json)

```json
{
  "presentaciones_default": [
    { "ml": 30,  "presentacion": "Vidrio", "precio": 45000 },
    { "ml": 50,  "presentacion": "Vidrio", "precio": 70000 },
    { "ml": 100, "presentacion": "Vidrio", "precio": 110000 }
  ],
  "por_perfume": {
    "Ombre Nomade": [
      { "ml": 50, "presentacion": "Vidrio", "precio": 85000 }
    ]
  }
}
```

- `presentaciones_default`: presentaciones y precios que aplican a **todos** los perfumes.
- `por_perfume`: excepciones. La clave es el `nombre` exacto del perfume (o su `id` como texto) y su lista **reemplaza** a la default solo para ese perfume.
- ⚠️ **Los precios actuales son de EJEMPLO** — ajústalos antes de publicar.
- Opcional por presentación: `"disponibilidad": "stock"` + `"stock": 5` para mostrar unidades disponibles (por defecto es `"fabricable"` = bajo pedido).

> Consejo: valida el JSON en https://jsonlint.com si el catálogo deja de cargar después de editar.

## Cómo publicar en GitHub Pages

1. Crea un repositorio en GitHub (ej. `catalogo`).
2. Sube estos archivos/carpetas: `index.html`, `data/`, `assets/`, `Logo.png`, `hero.mp4`, `hero-poster.jpg`, `.nojekyll`, `README.md`.
   - **No subas**: `index.php`, `api/` (necesitan servidor PHP y no funcionan en Pages) ni `index-dorado-backup.html` (respaldo del diseño anterior).
3. En el repo: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / (root) → Save**.
4. En 1-2 minutos el sitio queda en `https://TU-USUARIO.github.io/catalogo/`.
5. Cada vez que edites los JSON y hagas push, el sitio se actualiza solo.

## Probar en tu PC

El catálogo usa `fetch()`, así que no funciona abriendo el archivo con doble clic; sirve la carpeta con cualquier servidor local, por ejemplo:

```
C:\xampp\php\php.exe -S localhost:8080
```

y abre http://localhost:8080

## Qué hace cada pieza

- `index.html` — todo el sitio (diseño plateado: hero con video, líneas Silver/Gold/Diamante, testimonios, buscador, catálogo, carrito).
- `assets/js/carrito.js` — carrito guardado en el navegador (localStorage); el pedido se envía como mensaje de **WhatsApp** (sin base de datos).
- `data/perfumes.json` + `data/precios.json` — el contenido editable.
