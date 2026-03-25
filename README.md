# JJ Link Tree Design

Guia paso a paso para previsualizar y desplegar tu pagina tipo Linktree.

## 1. Preparar tu contenido

Antes de publicar, revisa estos archivos:

- `index.html`
- `style.css`
- `app.js`
- `assets/JJ_Logo.png`
- `assets/profile.jpg`

### Cambios obligatorios

1. Abre `index.html`.
2. Busca y reemplaza estos enlaces por los tuyos reales:
   - `https://www.linkedin.com/in/TU_USUARIO_LINKEDIN`
   - `https://www.instagram.com/TU_CUENTA_FOTOS`
   - `https://TU_PORTFOLIO.com`
3. Guarda los cambios.

---

## 2. Previsualizar en local

Tienes 3 formas sencillas:

### Opcion A (recomendada): Live Server en VS Code

1. Instala la extension **Live Server** (Ritwick Dey).
2. En VS Code, clic derecho en `index.html`.
3. Selecciona **Open with Live Server**.
4. Se abrira tu pagina en el navegador con una URL tipo:
   - `http://127.0.0.1:5500/jj_link_tree_design/index.html`

### Opcion B: Abrir archivo directo

1. Doble clic en `index.html`.
2. Se abrira en el navegador.

Nota: funciona, pero para proyectos web es mejor Live Server.

### Opcion C: Servidor local con Python

1. Abre terminal en la carpeta del proyecto.
2. Ejecuta:

```bash
python -m http.server 8080
```

3. Entra en:

- `http://localhost:8080`

4. Para detener el servidor: `Ctrl + C`.

---

## 3. Desplegar en Netlify (la forma mas rapida)

1. Entra a **https://app.netlify.com/drop**.
2. Arrastra la carpeta completa del proyecto (`jj_link_tree_design`).
3. Espera 10-30 segundos.
4. Netlify te dara una URL publica (ejemplo):
   - `https://nombre-aleatorio.netlify.app`
5. Esa URL ya la puedes pegar en tu bio de Instagram.

### Opcional: cambiar el subdominio en Netlify

1. En tu sitio de Netlify, entra en **Site settings**.
2. Ve a **Domain management**.
3. Cambia el nombre por uno profesional (si esta disponible).

---

## 4. Desplegar en GitHub Pages (alternativa profesional)

1. Crea un repositorio nuevo en GitHub.
2. Sube los archivos del proyecto (raiz con `index.html`).
3. En GitHub, entra en **Settings > Pages**.
4. En **Build and deployment** selecciona:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (root)
5. Guarda y espera 1-2 minutos.
6. GitHub te dara una URL tipo:
   - `https://tuusuario.github.io/nombre-repo/`

---

## 5. Comprobar que todo quedo bien

Antes de compartir el link final:

1. Revisa que cargue el logo y tu foto.
2. Prueba los 3 botones (LinkedIn, Instagram, Portfolio).
3. Valida que se vea bien en movil y escritorio.
4. Comprueba que el fondo animado no vaya lento en tu telefono.

---

## 6. Ponerlo en Instagram

1. Copia tu URL final (Netlify o GitHub Pages).
2. Ve a Instagram > Editar perfil.
3. Pega el enlace en el campo de sitio web.
4. Guarda.

Listo: tu pagina tipo Linktree quedara publicada y enlazada a tu perfil.
