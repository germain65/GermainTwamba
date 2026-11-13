# Dossiers de curiosité

Les sources LaTeX des quatre dossiers sont ici. Ils utilisent `preambule.tex`,
TikZ et les environnements standards de LaTeX. Les PDF publiés sont copiés dans
`public/curiosites/` pour être servis avec le site.

Depuis ce dossier, créer d'abord le répertoire de sortie puis compiler :

```powershell
New-Item -ItemType Directory -Path ..\public\curiosites -Force
latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=..\public\curiosites 01-pascal.tex
latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=..\public\curiosites 02-sangaku.tex
latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=..\public\curiosites 03-matrices-de-gram.tex
latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=..\public\curiosites 04-modele-de-verhulst.tex
```

Chaque fichier contient sa bibliographie et ses figures. Les données historiques
et théorèmes s'appuient sur les références indiquées à la fin du PDF.
