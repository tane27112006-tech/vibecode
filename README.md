# VibeCode — Sample Website

Simple sample website using HTML, CSS and JavaScript.

Run the site

1. Open `index.html` directly in your browser, or
2. Start a simple static server from the project root (recommended):

```bash
cd /workspaces/vibecode
python3 -m http.server 8000

# then open http://localhost:8000 in your host browser
```

Images / Gallery

- The site includes a gallery that expects images in the `imagines/` folder at the project root.
- Place your photos into `imagines/` and name them `photo1.jpg`, `photo2.jpg`, ..., `photo6.jpg` (or update the `index.html` image `src` attributes to match your filenames).
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`.

Stopping the server

To stop the Python server you started, find and kill it, for example:

```bash
# if running in this terminal session, press Ctrl+C
pkill -f "http.server" || true
```

Files

- `index.html` — layout, gallery and contact form
- `styles.css` — styles for layout, gallery and theme
- `script.js` — theme toggle, smooth scroll and form handling

Next steps

- I can add a small `favicon.ico` and placeholder images for you, or
- I can update the gallery to automatically show all files in `imagines/` (requires a small build step or server-side listing).
# VibeCode — Trang web mẫu

Trang web mẫu đơn giản sử dụng HTML, CSS và JavaScript.

Chạy trang web:

1. Mở `index.html` trực tiếp trong trình duyệt, hoặc
2. Dùng một web server tĩnh từ terminal (khuyến nghị để tránh một số vấn đề CORS):

```bash
# chạy server nhanh với Python 3
python3 -m http.server 8000

# rồi mở http://localhost:8000
# VibeCode — Sample Website

Simple sample website using HTML, CSS and JavaScript.

Run the site:

1. Open `index.html` directly in your browser, or
2. Use a simple static server from the terminal (recommended to avoid some CORS issues):

```bash
# quick static server with Python 3
python3 -m http.server 8000

# then open http://localhost:8000
```

Main files:

- `index.html` — layout and content
- `styles.css` — styling (light/dark theme)
- `script.js` — interactions (theme toggle, form)

Would you like me to:
- open the site in the devcontainer browser, or
- add another demo section (gallery, blog template, etc.)?
