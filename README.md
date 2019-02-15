# Hexo-D3

## Install npm and git and hexo

For Hexo:

```bash
npm install -g hexo-cli
```

## Start dummy page and test

```bash
hexo serve
```

## How to add D3js

- JS scripts in /source/js/ (must end in .js)
- Load them writing at the end of the post:

```html
<script src="https://d3js.org/d3.v5.min.js"></script>
<script type="application/javascript" src="/js/test.js"></script>
```

Note : Attention à l'unicité des noms de fonctions et d'élément CSS dans l'ensemble des fichiers JS et des posts.
