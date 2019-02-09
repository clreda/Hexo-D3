# Hexo-D3

## Install npm and git and hexo

For Hexo:

```bash
npm install -g hexo-cli
```

## Start dummy page and test

```bash
hexo server
```

## How to add D3js

- JS scripts in /themes/landscapes/sources/js/ (must end in .js)
- Load them writing their names (w/o extension) in _config.yml in variable jsarr

Note : Attention à l'unicité des noms de fonctions et d'élément CSS dans l'ensemble des fichiers JS et des posts.
