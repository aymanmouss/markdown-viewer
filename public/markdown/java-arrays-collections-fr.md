# Les Tableaux en Java (Java Arrays)

## Introduction

- Un tableau en Java est une structure de données contenant un groupe d'éléments du même type.
- Les tableaux ont des adresses mémoire consécutives et un nombre fixe d'éléments.
- Il est impossible de changer la taille d'un tableau après sa création.

## Tableaux Multi-dimensionnels

### Création

- Java supporte les tableaux à N dimensions (couramment jusqu'à 2 ou 3 dimensions).
- Exemples de déclarations :
  ```java
  int[] entiers;             // 1 dimension
  int[][] entiers2;          // 2 dimensions
  int[][][] entiers3;        // 3 dimensions
  ```
- Exemples d'instanciation :
  ```java
  entiers = new int[]{1, 2, 1};
  entiers2 = new int[][]{ {3, 2, 1}, {1, 3, 2}, {1, 1, 4} };
  var entiers3 = new int[][][]{
      { {1, 2, 3}, {4, 5, 6} },
      { {7, 8, 9} },
      { {10, 11, 12}, {13, 14, 15} },
  };
  ```

### Lecture

- Accéder à des éléments spécifiques en utilisant la notation par index :
  ```java
  System.out.println(entiers3[1][0][1]);  // Affiche 8
  ```

### Écriture

- Modifier des éléments spécifiques :
  ```java
  entiers3[1][0][1] = 20;  // Change 8 en 20
  ```

### Itération

- Utiliser des boucles imbriquées pour parcourir les tableaux multi-dimensionnels :
  ```java
  for (int[][] premiereDimension : entiers3) {
      for (int[] deuxiemeDimension : premiereDimension) {
          for (int troisiemeDimension : deuxiemeDimension) {
              System.out.println(troisiemeDimension);
          }
      }
  }
  ```
- Note : Des boucles profondément imbriquées peuvent causer des problèmes de performance avec de grands ensembles de données.

## Tableaux et null

### Tableaux Natifs

- Impossible d'ajouter des valeurs null dans des tableaux de types primitifs :
  ```java
  var liste = new int[]{1, 1, 1, null};  // Impossible, erreur de compilation
  ```

### Tableaux d'Objets

- Peuvent contenir des valeurs null :
  ```java
  var liste = new String[]{"jd", "iod", null};  // Autorisé
  ```
