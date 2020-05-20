# La richesse d'un pays en rapport à son pouvoir d'achat selon le Big Mac Index.

## Déscription projet

Ce projet a comme but d'observer l'évolution de la richesse d'un pays entre l'année 2009 et 2018.

Les pays prises en compte sont ceux qui se trouvent dans le Big Mac Index (une brève description de quoi consiste cet index ci-dessous). Ensuite, le PIB (par haibtant) du pays en question par son Big Mac Index on obtient le nombre des Big Mac qu'une personne de la nation peut acheter avec cette richesse.

## Lien vers la page GitHub de la visualisation

Lien vers page GitHub des codes: https://github.com/ssaeli/Projet_1

 *Attention* : l'ouverture du projet à travers le browser Firefox ne permet pas de visualiser les éléments correctement.
 Pour une visualisation correcte il sera bien de ovurir le projet avec Google Chrome, celui que j'ai utilisé le long de la programmation du projet. Ainsi, l'image suivante permet de visualiser et apprécier le travail en cas de problème.

Une première visualisation de la carte géographique avant que l'utilisateur puisse choisir une année à travers la liste déroulante:

![alt text](/data/img_readme/img_1.PNG "Page d'acceuil")

## Variables retenues
Les variables telle que le PIB par habitant et le Big Mac Index de différents pays ont été pris en compte.

Le Big Mac Index est un indicateur informel qui confronte le pouvoir d'achat des différentes monnaies par rapport aux prix de vente du sandwich. L'index represente la valeur du prix en US$ de ce burger en tenant en compte le taux de change entre la monnaie du pays en question et le US dollar. Par exemple, forcément cet indicateur est de la valeur de 1 aux USA.
Cette comparaison informelle prend en compte ce burger parce qu'il est disponible dans plusieurs nations dans le monde entiers. En effet il est produit d'une manière standardisée par taille, composition et qualité dans tous les pays du globe. Au total les données du Big Mac Index prennent en considèration 21 pays en 2000 et 47 pays en 2018, donc au cours des années on a de plus en plus de pays qui viennent être ajoutés. Pour cette raison j'ai insérée une liste des pays déjà présents depuis l'années 2000, ainsi que les pays qui vont être ajoutés au cours du temps. 

Le PIB (Produit Intérieur Brut) par habitant (en US$) est l'indicateur économique qui permet de quantifier le niveau de vie et du pouvoir d'achat en tant en compte l'évolution du niveau général des prix dans une nation donnée.

## Fonctionnalités 

L'idée est de faire intéragir l'utilisateur, grâce à une liste déroulnate par rapport aux années (entre 2000 et 2018). Un choix qui permet donc à la page d'être intéressante et de pouvoir revenir sur une donnée ou plusieurs. Par exemple, l'utilisateur peut choisir l'année 2018 et ensuite aller sur le 2017 ou autre en cliquant sur le ménu déroulante. Comme on peut le voir dans l'image suivante : 

![alt text](/data/img_readme/img_2.PNG "Intéraction utilisateur")

Pour montrer l'évolution de la richesse (d'une façon dynamique) de différentes nations j'ai choisi de diviser le PIB par habitant d'une nation par le Big Mac Index de celle-ci, ainsi on obtient la quantité de sandwich qu'on peut acheter avec cette somme d'argent par année.

Plus le burger d'un pays a une taille élevée, plus alors l'habitant de la nation en question peut en achter plus et donc ce pays est riche.

## Explicitation des choix graphiques

Le Big Mac Index prend en compte différents pays du globe, ainsi le premier choix graphiques était de pouvoir representer dans une carte géographique du monde les différentes nations choisies.

Ensuite, j'ai voulu montrer l'évolution du pouvoir d'achat en ajoutant un élément "burger" (🍔) pour les pays en question. Chaque sandwich, pour chaque année et nation prend une taille différente en rapport à combien de Big Mac on peut effectivement acheter. Le nombre de Big Mac se trouve donc dans la base de données et elle est reprise et visualisée aussi sur la carte géographique à côté de chaque élément 🍔.

L'image represente une partie de la carte pour l'année 2004 en se focalisant sur l'Amérique du Nord et du Sud:

![alt text](/data/img_readme/img_3.PNG "Focalisation taille")

On voit en effet qu'au Canada, avec le PIB par habitant et le Big Mac Index de la période en question, les citoyens pouvaient acheter 13'757 Big Mac. Au Brezil, par contre, on pouvait acheter que 2'142 Big Mac. 
En conclusion, on peut affirmer, grâce à cette representation, que le Canada est plus riche du Brazil en 2004 selon cette comparasion faite au travers le Big Mac Index.

## Apports de la visualisation

Cette visualisation permet de comprendre l'évolution en terme de richesse des divers pays du monde entier, grâce à un élément interactif, tel que le menu déroulant, où l'utilisateur peut choisir l'année qui souhaite pour ensuite comparer la taille des burger et la quantité qu'on peut acheter dans les différentes nations et aussi effectuer une comparaison par années.

## Auteur du travail
Ce travail a été réalisé par Elisa Colletti (Master DCS) dans le cadre du cours de *« Visualisation de données »* donné à l’Université de Lausanne (Unil) par Monsieur Loïc Cattani, avec l'assistance de Loris Rimaz.

## Source des données

*GDP per capita (Current US$) (2000 - 2018), World Bank nation accounts data, and OECD National Accounts data files* [en ligne].
<br>
Disponible sur le site web : https://data.worldbank.org/indicator/NY.GDP.PCAP.CD [dernier accès le 20 mai 2020].

*The Big Mac Index (2000 - 2018), The Economist* [en ligne].
<br>
Disponible par le site web : https://www.economist.com/news/2020/01/15/the-big-mac-index [dérnier accès le 20 mai 2020].