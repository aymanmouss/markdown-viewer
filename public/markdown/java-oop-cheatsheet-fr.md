# Aide-mémoire des Concepts de POO en Java

## 1. Classes et Objets

### Classe

- Modèle pour créer des objets
- Contient des attributs (champs) et des méthodes

```java
public class Voiture {
    private String modele;
    private int annee;

    public void demarrer() {
        System.out.println("La voiture démarre");
    }
}
```

### Objet

- Instance d'une classe
- Créé en utilisant le mot-clé `new`

```java
Voiture maVoiture = new Voiture();
```

## 2. Constructeurs

- Méthode spéciale pour initialiser les objets
- Même nom que la classe
- Pas de type de retour

```java
public class Voiture {
    private String modele;
    private int annee;

    public Voiture(String modele, int annee) {
        this.modele = modele;
        this.annee = annee;
    }
}
```

## 3. Encapsulation

- Masquer les détails internes d'une classe
- Utiliser des champs privés avec des getters et setters publics

```java
public class Personne {
    private String nom;

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }
}
```

## 4. Héritage

- Créer de nouvelles classes basées sur des classes existantes
- Utiliser le mot-clé `extends`

```java
public class VoitureElectrique extends Voiture {
    private int capaciteBatterie;

    public VoitureElectrique(String modele, int annee, int capaciteBatterie) {
        super(modele, annee);
        this.capaciteBatterie = capaciteBatterie;
    }
}
```

## 5. Surcharge de Méthode

- Fournir une implémentation spécifique d'une méthode dans une sous-classe
- Utiliser l'annotation `@Override`

```java
@Override
public void demarrer() {
    System.out.println("La voiture électrique démarre silencieusement");
}
```

## 6. Polymorphisme

- Des objets de différents types peuvent être traités comme des objets d'une super-classe commune
- Permet l'envoi dynamique de méthodes

```java
Voiture maVoiture = new VoitureElectrique("Tesla", 2023, 100);
maVoiture.demarrer(); // Appelle la méthode demarrer de VoitureElectrique
```

## 7. Classes Abstraites

- Ne peuvent pas être instanciées, destinées à être sous-classées
- Peuvent contenir des méthodes abstraites et concrètes

### Syntaxe et Utilisation

```java
public abstract class Animal {
    protected String nom;

    public Animal(String nom) {
        this.nom = nom;
    }

    public abstract void faireBruit(); // Méthode abstraite

    public void manger() { // Méthode concrète
        System.out.println(nom + " mange.");
    }
}

public class Chien extends Animal {
    public Chien(String nom) {
        super(nom);
    }

    @Override
    public void faireBruit() {
        System.out.println(nom + " dit : Wouf !");
    }
}
```

### Points Clés

- Déclarées avec le mot-clé `abstract`
- Peuvent avoir des constructeurs et des variables d'instance
- Les méthodes abstraites doivent être implémentées par les sous-classes non abstraites
- Si une sous-classe n'implémente pas toutes les méthodes abstraites, elle doit aussi être déclarée abstraite
- Ne peuvent pas être instanciées directement

### Différences avec les Interfaces

- Peuvent avoir des variables d'instance et des constructeurs
- Peuvent fournir des implémentations de méthodes (méthodes concrètes)
- Une classe peut étendre seulement une classe abstraite, mais implémenter plusieurs interfaces

### Cas d'Utilisation

- Définir une classe de base commune avec une certaine fonctionnalité par défaut
- Déclarer des membres non publics (ce que les interfaces ne peuvent pas avoir)
- Quand vous voulez partager du code entre plusieurs classes étroitement liées

## 8. Interfaces

- Contrat spécifiant un ensemble de méthodes qu'une classe doit implémenter
- Utiliser le mot-clé `implements`

```java
public interface Conduisible {
    void accelerer();
    void freiner();
}

public class Voiture implements Conduisible {
    public void accelerer() { /* implémentation */ }
    public void freiner() { /* implémentation */ }
}
```

## 9. Collections

### Tableaux

- Conteneur de taille fixe pour des éléments du même type

```java
int[] nombres = new int[5];
nombres[0] = 10;
```

### ArrayList

- Implémentation de tableau à taille dynamique

```java
import java.util.ArrayList;

ArrayList<String> liste = new ArrayList<>();
liste.add("Bonjour");
liste.remove(0);
String element = liste.get(0);
```

## 10. Gestion des Exceptions

- Mécanisme pour gérer les erreurs d'exécution

```java
try {
    // Code qui peut lancer une exception
} catch (Exception e) {
    // Gérer l'exception
} finally {
    // Code qui s'exécute toujours
}
```

## 11. Entrées/Sorties de Fichiers

- Lire et écrire dans des fichiers

```java
import java.io.*;

// Lecture
try (BufferedReader lecteur = new BufferedReader(new FileReader("fichier.txt"))) {
    String ligne = lecteur.readLine();
}

// Écriture
try (BufferedWriter ecrivain = new BufferedWriter(new FileWriter("fichier.txt"))) {
    ecrivain.write("Bonjour, Monde !");
}
```

## 12. Expressions Lambda (Java 8+)

- Manière concise de représenter des fonctions anonymes

```java
List<Integer> nombres = Arrays.asList(1, 2, 3, 4, 5);
nombres.forEach(n -> System.out.println(n));
```

## 13. API Stream (Java 8+)

- Fournit une approche fonctionnelle pour traiter les collections

```java
List<String> noms = Arrays.asList("Alice", "Bob", "Charlie");
List<String> nomsFiltres = noms.stream()
                               .filter(nom -> nom.startsWith("A"))
                               .collect(Collectors.toList());
```

## 14. Surcharge de equals(), hashCode(), et toString()

### Méthode equals()

- Utilisée pour la comparaison d'objets
- Surcharger pour définir une logique d'égalité personnalisée

```java
@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Fruit fruit = (Fruit) o;
    return nom.equals(fruit.nom) && couleur.equals(fruit.couleur);
}
```

### Méthode hashCode()

- Utilisée par les collections basées sur le hachage (ex. HashMap, HashSet)
- Doit être surchargée si equals() est surchargée

```java
@Override
public int hashCode() {
    return Objects.hash(nom, couleur);
}
```

### Méthode toString()

- Fournit une représentation en chaîne de caractères d'un objet
- Utile pour le débogage et la journalisation

```java
@Override
public String toString() {
    return "Fruit{nom='" + nom + "', couleur='" + couleur + "'}";
}
```

## 15. Records (Java 16+)

- Syntaxe compacte pour créer des classes de données immuables
- Introduit comme fonctionnalité de prévisualisation dans Java 14, standardisé dans Java 16
- Génère automatiquement le constructeur, les getters, equals(), hashCode(), et toString()

```java
public record Fruit(String nom, String couleur, String origine) {}
```

### Utilisation

```java
Fruit pomme = new Fruit("Pomme", "Rouge", "France");
System.out.println(pomme.nom()); // Getter
System.out.println(pomme); // toString()
```

### Caractéristiques

- Classe finale (ne peut pas être étendue)
- Tous les champs sont privés et finaux
- Ne peut pas étendre d'autres classes (mais peut implémenter des interfaces)
- Ensemble prédéfini de méthodes qui ne peuvent pas être supprimées

### Avantages

- Réduction du code répétitif
- Amélioration de la lisibilité
- Immutabilité intégrée

## 16. Interfaces

- Définissent un contrat pour les classes, spécifiant les méthodes qui doivent être implémentées
- Permettent l'abstraction et une forme d'héritage multiple en Java

### Syntaxe et Utilisation de Base

```java
public interface Motorise {
    void faireLePlein();  // Implicitement public et abstract
}

public class Voiture implements Motorise {
    @Override
    public void faireLePlein() {
        System.out.println("Remplissage du réservoir");
    }
}
```

### Méthodes par Défaut (Java 8+)

- Fournissent des implémentations par défaut dans les interfaces

```java
public interface Motorise {
    default void faireLePlein() {
        System.out.println("Implémentation par défaut");
    }
}
```

### Implémentation Multiple d'Interfaces

```java
public class Voiture implements Motorise, Pneumatiques {
    // Doit implémenter toutes les méthodes des deux interfaces
    // sauf si elles ont des implémentations par défaut
}
```

### Points Clés

- Les méthodes d'interface sont implicitement publiques et abstraites
- Les interfaces ne peuvent pas avoir de champs d'instance (seulement des champs statiques finaux)
- Une classe peut implémenter plusieurs interfaces
- Utilisées pour définir un comportement commun pour des classes non liées
- Utiles pour obtenir un couplage faible dans les applications

### Différences avec les Classes Abstraites

- Les interfaces ne peuvent pas avoir de champs d'instance
- Les classes peuvent implémenter plusieurs interfaces, mais étendre seulement une classe abstraite
- Les interfaces définissent un contrat, tandis que les classes abstraites peuvent fournir une certaine implémentation

## 17. Classes Internes et Classes Anonymes

### Classes Internes

- Classes définies à l'intérieur d'une autre classe
- Utiles pour organiser le code et l'encapsulation

```java
public class Fruit {
    public FruitInterne fruitInterne = new FruitInterne();

    public class FruitInterne {
        public String nomInterne = "nom interne";
    }
}

// Utilisation
var fruit = new Fruit();
System.out.println(fruit.fruitInterne.nomInterne);
```

### Classes Anonymes

- Classes sans nom, définies et instanciées en même temps
- Souvent utilisées pour implémenter des interfaces ou étendre des classes à la volée

```java
public interface CallBack {
    void affichageCallback();
}

public class ClasseEnglobante {
    public void afficherAvecCallback(CallBack callBack) {
        System.out.println("Affichage");
        callBack.affichageCallback();
    }
}

// Utilisation avec une classe anonyme
var classeEnglobante = new ClasseEnglobante();
classeEnglobante.afficherAvecCallback(new CallBack() {
    @Override
    public void affichageCallback() {
        System.out.println("Mon callback personnalisé");
    }
});
```

### Points Clés

- Les classes internes ont accès aux membres de la classe englobante, même s'ils sont privés
- Les classes anonymes sont utiles pour des implémentations à usage unique
- Les deux peuvent être utilisées pour obtenir une meilleure encapsulation
- Les classes anonymes sont souvent remplacées par des expressions lambda dans le Java moderne (pour les interfaces fonctionnelles)

### Cas d'Utilisation

- Classes internes : Organiser du code qui n'est utilisé qu'à un seul endroit
- Classes anonymes : Gestionnaires d'événements, callbacks, ou implémentation simple d'interfaces à la volée

## 18. Énumérations (Enum)

- Type de données spécial pour définir des collections de constantes
- Utile pour représenter des ensembles fixes de valeurs

### Création d'une Énumération

```java
public enum Jour {
    LUNDI, MARDI, MERCREDI, JEUDI, VENDREDI, SAMEDI, DIMANCHE
}
```

### Utilisation d'une Énumération

Comme type de variable :

```java
Jour jour;
```

Comme attribut de classe :

```java
public record Exemple(Jour jour) {}
```

Dans les appels de méthodes ou les constructeurs :

```java
new Exemple(Jour.DIMANCHE);
```

### Points Clés

- Les enums sont implicitement `final` et `static`
- Peuvent être utilisés dans les instructions switch
- Ont des méthodes comme `values()` pour obtenir toutes les constantes enum
- Peuvent avoir des champs, des constructeurs et des méthodes

### Cas d'Utilisation

- Représenter les jours de la semaine, les mois, les saisons
- Définir un ensemble fixe d'options ou d'états
- Améliorer la lisibilité du code et la sécurité des types

N'oubliez pas, les énumérations offrent un moyen puissant de représenter et de travailler avec des ensembles fixes de constantes en Java, améliorant la clarté du code et réduisant les erreurs.

N'oubliez pas, cet aide-mémoire est un point de départ. En continuant à apprendre Java, vous pouvez approfondir ces concepts et ajouter des sujets plus avancés. Bonne programmation !
