![git](./img/posts/git.png)

# Les 3 commandes git que j'utilise le plus

> Bon, c'est peut être l'article pas très utile pour ceux qui connaissent déjà
> git mais voici les 3 commandes git que j'utilise le plus, hors add et commit
> qui sont assez communs.

## Commande numéro 1 : status

`git status` est probablement la commande git que j'utilise le plus. Elle permet
de connaître rapidement l'état dans lequel est le dépôt. J'utilise un alias,
pour gagner du temps et formatter la sortie de la commande comme je le souhaite.

`git st` me permet de faire la même chose que `git status -sb`, c'est à dire,
afficher un `status` mais en version courte grâce au `-s | --short` et avec la
branche grâce au à l'option `-b | --branch`.

> Pour résumer j'utilise l'alias : `git st === git status -sb`

## Commande numéro 2 : stash

`git stash` me permet de mettre de côté un travail que j'ai pu effectuer mais
que je ne veux pas `commit` tout de suite. Il est possible d'utiliser le stash
de plusieurs façons :

- **`stash --keep-index`** permet de stash les fichiers suivis, mais pas ceux
  qui sont déjà dans l'`index`.

```sh
$ git status

M  index.html # fichier ajouté à l'index
 M index.js   # fichier modifié mais non ajouté
?? index.css  # fichier non suivi par git

$ git stash --keep-index

$ git status

M  index.html # fichier ajouté à l'index
?? index.css  # fichier non suivi par git
```

- **`stash`** seul permet de mettre de côté tous les fichiers qui sont suivis.

```sh
$ git status

M  index.html # fichier ajouté à l'index
 M index.js   # fichier modifié mais non ajouté
?? index.css  # fichier non suivi par git

$ git stash

$ git status

?? index.css  # fichier non suivi par git
```

- **`stash --include-untracked`** permet de stash tous les fichiers, même les
  non suivis par git.

```sh
$ git status

M  index.html # fichier ajouté à l'index
 M index.js   # fichier modifié mais non ajouté
?? index.css  # fichier non suivi par git

$ git stash

$ git status

# rien ici car tout est stash
```

- **`stash --all`** permet de stash **tous** les fichiers, y compris ceux qui
  sont dans le `.gitignore` !

> Pour résumer, mes alias sont les suivant:
>
> - `git stsh === git stash --keep-index`
> - `git stash` reste le même
> - `git staash === stash --include-untracked`
> - `git staaash = stash --all`

## Commande numéro 3 : reset HEAD --

Alors, pour cette dernière commande, j'utilise `reset` dans une utilisation un peu
spéciale. Le fait de faire `git reset HEAD -- monfichier.txt` me permet de
retirer le fichier de l'index. Un exemple sera plus parlant :

```sh
git add .

# Tous mes fichiers sont ajouté dans l'index

git reset HEAD -- index.html

# Tous mes fichiers sont dans l'index, sauf index.html
# que je viens d'enlever.
```

> Pour résumer, mon alias est `git unstage === git reset HEAD --`

---

Voilà pour les 3 commandes que j'utilise le plus avec git. J'espère que vous avez
découvert des utilisations sympa de git au travers de cet article.
