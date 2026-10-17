# tropic-site

Site vitrine one-page de GROUPE TROPIC (tropicgroupe.com).

- Statique pur : HTML/CSS/JS, zéro build, zéro dépendance externe
- Polices self-hostées (Bodoni Moda, Archivo)
- FR/EN (bascule mémorisée en localStorage)
- Logo validé : lockup GT-B2 (~/Documents/TROPIC-identite/logo/)

## Déploiement

GitHub Pages : repo public, branche `main`, racine. Le fichier `CNAME`
désigne `tropicgroupe.com`.

DNS (IONOS) :
- A `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- CNAME `www` → ousmanhub.github.io

## Dev local

python3 -m http.server 8400
