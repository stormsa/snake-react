# Snake-react

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) 

Ceci est un jeu de snake développé en ReactJS

## Librairies utilisées
Les dépendances du projet sont gérées avec NPM. Vous devez éxécuter un npm install pour les récupérer.
+ ReactJS : Framework de développement d'interfaces utilisés pour développer le comportement du jeu. 
+ Redux : Gère le "state" par le biais du Redux Store. Le jeu est ainsi découpé en components, reducers, et containers.
+ Jest : Permet de tester le comportement des éléments du jeu unitairement
+ Enzyme : Permet de mocker les composants et de tester leur affichage.
+ Babel-jest : Va transpiler le code TypeScript en code JS pour qu'il puisse être testé par Jest.

## Correctifs necessaires
+ Optimisation du déplacement du serpent (problème de performances)
+ Les fonctionnalités suivantes sont développées mais pas encore implémentées :
	Charger les murs sur le dashboard
	Manger une pastille
	Cogner un mur

## Améliorations possible
+ Rendre responsive le jeu
+ Changer le skin du serpent, des murs, de la pastille
+ Cogner la queue du serpent tue le serpent
+ Gérer le placement des murs et de la pastille pour qu'ils ne supperposent pas
+ Partager son score sur les réseaux sociaux


## Principe du jeu 
Le snake est un serpent qui se déplace sur l'écran. Votre but est de manger une pastille. Chaque pastille mangé par le serpent augmente sa taille et le score. Chaque mur hurté par le serpent le fait rapetisser, et fait perdre une vie.
Le but du jeu est d'atteindre le meilleur score.

Vous pouvez augmenter la difficulté du jeu en modifiant les variables suivantes :
WallNumber : Nombre de murs générés 
Life : Le nombre de vies. 
Speed : La vitesse du serpent
SnakeSize : La taille du serpent

## Installation du jeu

Clonez le projet sur le serveur
```bash
git clone https://github.com/stormsa/snake-react.git <FOLDER_NAME_HERE>
```
Installer les dépendances
 ```bash
npm install 
```
Exécuter le jeu
 ```bash
npm run start 
```
Tester les composants
 ```bash
npm run test 
```





  