# Classes de Date Standard en Java

## Introduction

- Ces classes peuvent être trouvées dans du code ancien
- Non recommandées pour une utilisation dans un nouveau code
- Préférez la nouvelle API Date and Time (couverte dans une leçon future)
- Comprendre ces classes est important pour maintenir des systèmes plus anciens

## java.util.Date et Timestamps

### Aperçu

- Encapsule un timestamp
- Représente les millisecondes depuis le 1er janvier 1970, 00:00:00 GMT

### Utilisation

```java
// Obtenir le timestamp actuel
var date = new Date();
System.out.println(date.getTime());

// Créer un objet Date avec un timestamp spécifique
var date = new Date(1686313491038L);
```

### Notes

- `date.getTime()` utilise `System.currentTimeMillis()` en interne
- La précision dépend du système d'exploitation

## java.util.Calendar

### Aperçu

- Encapsule un timestamp
- Permet la représentation et la manipulation de date/heure dans un calendrier et un fuseau horaire

### Utilisation

```java
// Obtenir l'instance de calendrier actuelle
Calendar calendar = Calendar.getInstance();
```

## java.util.GregorianCalendar

### Aperçu

- Implémentation concrète de la classe abstraite `Calendar`
- Représente un calendrier grégorien

### Fonctionnalités

- Méthode `isLeapYear()` pour vérifier les années bissextiles

### Utilisation

```java
// Calendar.getInstance() renvoie un GregorianCalendar par défaut
Calendar calendar = Calendar.getInstance();
```

## Manipulation des instances de Calendar

### Exemples

```java
Calendar calendar = Calendar.getInstance();
calendar.set(Calendar.YEAR, 2023);
calendar.add(Calendar.HOUR_OF_DAY, 2);
```

## Conclusion

Bien qu'il soit important de comprendre ces classes pour la maintenance de code ancien, il est recommandé d'utiliser la nouvelle API Date and Time pour les nouveaux projets Java.

# API Date and Time de Java 8

## Introduction

L'API Date and Time de Java 8 (java.time.\*) a été introduite pour résoudre les lacunes des anciennes classes Date et Calendar :

- Plus simple et intuitive à utiliser
- Immuable et thread-safe
- Fonctionnalités plus complètes

## Classes clés

### Instant

- Encapsule un timestamp
- Exemple : `Instant.now()`

### LocalDate

- Représente une date (année, mois, jour) sans heure ni fuseau horaire
- Exemple : `LocalDate.of(2014, Month.DECEMBER, 25)`

### LocalTime

- Représente une heure (heure, minute, seconde, nanoseconde) sans date ni fuseau horaire
- Exemple : `LocalTime.of(12, 32, 22, 24)`

### LocalDateTime

- Combine date et heure sans fuseau horaire
- Exemple : `LocalDateTime.of(2014, Month.DECEMBER, 25, 12, 32, 22, 23)`

### Fuseaux horaires et décalages

- ZoneId : Encapsule un fuseau horaire
- ZoneOffset : Représente un décalage horaire
- OffsetTime : Heure avec un décalage
- ZonedDateTime : Date et heure avec un fuseau horaire
- OffsetDateTime : Date et heure avec un décalage

### Calendriers

- Par défaut : ISO-8601 (Grégorien)
- Autres normes : Hijrah, Japonais, Minguo, ThaiBuddhist

## Caractéristiques clés

- Immuabilité : Les objets sont thread-safe
- Complète : Prend en charge les dates, heures, intervalles, calendriers, fuseaux horaires
- Intuitive : La numérotation des mois commence à 1, pas à 0

## Pour aller plus loin

- JSR 310 pour les spécifications détaillées
- Documentation officielle de l'API Date and Time de Java

# Classes Duration et Period en Java

Temps de lecture : 2 minutes

## La classe Duration

La classe Duration encapsule une durée mesurée en millisecondes de manière immuable. Un objet Duration n'a pas de système de calendrier ni de fuseau horaire.

Exemples d'utilisation de la classe Duration :

```java
var durationNano = Duration.ofNanos(1000000);
var durationMillis = Duration.ofMillis(1000);
var durationSeconds = Duration.ofSeconds(1);
var durationMinutes = Duration.ofMinutes(3);
var durationHours = Duration.ofHours(1);
var durationDays = Duration.ofDays(2);
```

Pour l'initialisation, il est possible de partir de plusieurs unités d'entrée. Il est même possible d'obtenir la durée entre deux dates-heures :

```java
var firstDate = LocalDateTime.of(2022, 1, 1, 0, 0, 0);
var secondDate = LocalDateTime.of(2022, 6, 6, 14, 0, 0);
var datesDifference = Duration.between(firstDate, secondDate);
System.out.println(datesDifference.getSeconds());
```

Comme Duration encapsule une durée en millisecondes, on peut obtenir la différence entre deux dates-heures, mais pas entre deux dates simples, ce qui entraînerait une erreur d'exécution.

## La classe Period

La classe Period encapsule une période de temps : c'est une quantité de temps exprimée sous forme de différents champs permettant de représenter une période de manière lisible par l'homme, comme un an, cinq mois et huit jours.

Exemple d'utilisation de la classe Period :

```java
var period = Period.of(2, 3, 2);
System.out.println(period.getDays());
System.out.println(period.getMonths());
System.out.println(period.getYears());
```

Contrairement à Duration, il est possible d'obtenir la différence entre deux dates simples :

```java
var firstDate = LocalDate.of(2022, 1, 1);
var secondDate = LocalDate.of(2023, 6, 6);
var difference = Period.between(firstDate, secondDate);
System.out.println(difference);
```

Par défaut, la différence donne le nombre d'années, de mois et de jours. Il est également possible d'avoir la différence en nombre total de jours, par exemple (en utilisant la classe ChronoUnit) :

```java
var firstDate = LocalDate.of(2022, 1, 1);
var secondDate = LocalDate.of(2023, 6, 6);
var difference = ChronoUnit.DAYS.between(firstDate, secondDate);
System.out.println(difference);
```

# Formatage des dates en Java

Temps de lecture : 2 minutes

## Introduction

Bien que nous ayons vu comment représenter les dates techniquement dans des objets Java, l'affichage de ces dates à l'aide de `toString()` n'est pas toujours convivial. Pour résoudre ce problème, il existe des classes qui permettent d'afficher les dates dans le format souhaité.

Nous allons voir comment formater les dates en utilisant deux API présentes dans Java : `java.util` et `java.time`.

## Formatage des dates de java.util.\*

### java.text.DateFormat et java.util.SimpleDateFormat

La classe abstraite `DateFormat` et son implémentation standard `SimpleDateFormat` sont utilisées à cette fin.

Exemple d'affichage d'une date dans un format spécifique :

```java
var today = new Date();
var format = new SimpleDateFormat("'le' dd MMMM yyyy 'à' HH:mm:ss Z");
System.out.println(format.format(today)); // Affiche : le 09 juin 2023 à 15:33:32 +0200
```

### Formats possibles

Pour construire `SimpleDateFormat`, vous pouvez utiliser les caractères clés suivants :

| Lettre | Description                     | Exemple                                   |
| ------ | ------------------------------- | ----------------------------------------- |
| G      | Ère                             | ap. J.-C. (après Jésus-Christ), av. J.-C. |
| y      | Année                           | 06 ; 2006                                 |
| M      | Mois dans l'année               | septembre ; sept. ; 07                    |
| w      | Semaine dans l'année            | 34                                        |
| W      | Semaine dans le mois            | 2                                         |
| D      | Jour dans l'année               | 192                                       |
| d      | Jour dans le mois               | 23                                        |
| F      | Jour de la semaine dans le mois | 17                                        |
| E      | Jour de la semaine              | mercredi ; mer.                           |
| a      | Marqueur AM/PM                  | PM, AM                                    |
| H      | Heure (0-23)                    | 23                                        |
| k      | Heure (1-24)                    | 24                                        |
| K      | Heure en AM/PM (0-11)           | 6                                         |
| h      | Heure en AM/PM (1-12)           | 7                                         |
| m      | Minutes                         | 59                                        |
| s      | Secondes                        | 59                                        |
| S      | Millisecondes                   | 12564                                     |
| z      | Fuseau horaire général          | CEST ; Heure d'été d'Europe centrale      |
| Z      | Fuseau horaire (RFC 822)        | +0200                                     |

Tout caractère entre deux guillemets comme 'le ' ne sera pas interprété et apparaîtra tel quel dans l'affichage de la date.

## Formatage des dates de java.time.\*

### java.time.format.DateTimeFormatter

Voici comment formater les dates en utilisant `DateTimeFormatter` :

```java
var zonedDateTime = ZonedDateTime.of(
    LocalDate.of(2022, 01, 12),
    LocalTime.of(12, 05, 33, 22),
    ZoneId.of("Japan")
);
var formatter = DateTimeFormatter.ISO_ZONED_DATE_TIME;
var customFormatter = DateTimeFormatter.ofPattern("dd MMMM yyyy xxx");
var dateTimeStr = zonedDateTime.format(formatter);
```

### Formats possibles

Vous pouvez utiliser les constantes suivantes pour appliquer directement un format standard :

| Nom                  | Rôle                                                              | Exemple                                            |
| -------------------- | ----------------------------------------------------------------- | -------------------------------------------------- |
| BASIC_ISO_DATE       | Format ISO de base pour date sans décalage horaire                | "20141225"                                         |
| ISO_DATE             | Format ISO pour date avec ou sans décalage horaire                | "2014-12-25", "2014-12-25+01:00"                   |
| ISO_DATE_TIME        | Format ISO pour date-heure avec ou sans fuseau et décalage        | "2014-12-25T00:00:00", "2014-12-25T10:00:00+01:00" |
| ISO_INSTANT          | Format ISO pour date-heure en UTC                                 | "2014-12-25T00:00:00Z"                             |
| ISO_LOCAL_DATE       | Format ISO pour date sans fuseau ni décalage                      | "2014-12-25"                                       |
| ISO_LOCAL_DATE_TIME  | Format ISO pour date-heure sans fuseau ni décalage                | "2014-12-25T00:00:00"                              |
| ISO_LOCAL_TIME       | Format ISO pour heure sans fuseau ni décalage                     | "20:15", "20:15:30"                                |
| ISO_OFFSET_DATE      | Format ISO pour date avec décalage horaire                        | "2014-12-25+01:00"                                 |
| ISO_OFFSET_DATE_TIME | Format ISO pour date-heure avec décalage horaire                  | "2014-12-25T00:00:00+01:00"                        |
| ISO_OFFSET_TIME      | Format ISO pour heure avec décalage horaire                       | "10:15+01:00", "10:15:30+01:00"                    |
| ISO_ORDINAL_DATE     | Format ISO pour date exprimée en jour de l'année sans décalage    | "2014-359", "2014-359+01:00"                       |
| ISO_TIME             | Format ISO pour heure avec ou sans décalage                       | "10:15", "10:15:30", "10:15:30+01:00"              |
| ISO_WEEK_DATE        | Format ISO pour date exprimée en semaine de l'année sans décalage | "2014-W52-4", "2014-W52-4+01:00"                   |
| ISO_ZONED_DATE_TIME  | Format ISO avec fuseau horaire et décalage                        | "2014-12-25T00:00:00+01:00[Europe/Paris]"          |
| RFC_1123_DATE_TIME   | Format RFC-1123 / RFC 822                                         | "jeu., 25 déc. 2014 00:00:00 +0100"                |

Il est également possible de définir des formats personnalisés en utilisant divers symboles comme 'G' pour l'ère, 'y' pour l'année, 'M' pour le mois, etc. Consultez la documentation Java pour une liste complète des symboles de format.
