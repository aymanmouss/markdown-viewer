# Java OOP Concepts Cheat Sheet

## 1. Classes and Objects

### Class

- Blueprint for creating objects
- Contains attributes (fields) and methods

```java
public class Car {
    private String model;
    private int year;

    public void start() {
        System.out.println("The car is starting");
    }
}
```

### Object

- Instance of a class
- Created using the `new` keyword

```java
Car myCar = new Car();
```

## 2. Constructors

- Special method for initializing objects
- Same name as the class
- No return type

```java
public class Car {
    private String model;
    private int year;

    public Car(String model, int year) {
        this.model = model;
        this.year = year;
    }
}
```

## 3. Encapsulation

- Hiding internal details of a class
- Using private fields with public getters and setters

```java
public class Person {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

## 4. Inheritance

- Creating new classes based on existing classes
- Use `extends` keyword

```java
public class ElectricCar extends Car {
    private int batteryCapacity;

    public ElectricCar(String model, int year, int batteryCapacity) {
        super(model, year);
        this.batteryCapacity = batteryCapacity;
    }
}
```

## 5. Method Overriding

- Providing a specific implementation of a method in a subclass
- Use `@Override` annotation

```java
@Override
public void start() {
    System.out.println("The electric car is starting silently");
}
```

## 6. Polymorphism

- Objects of different types can be treated as objects of a common super class
- Enables dynamic method dispatch

```java
Car myCar = new ElectricCar("Tesla", 2023, 100);
myCar.start(); // Calls ElectricCar's start method
```

## 17. Abstract Classes

- Cannot be instantiated, meant to be subclassed
- Can contain both abstract and concrete methods

### Syntax and Usage

```java
public abstract class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public abstract void makeSound(); // Abstract method

    public void eat() { // Concrete method
        System.out.println(name + " is eating.");
    }
}

public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    @Override
    public void makeSound() {
        System.out.println(name + " says: Woof!");
    }
}
```

### Key Points

- Declared using the `abstract` keyword
- Can have constructors and instance variables
- Abstract methods must be implemented by non-abstract subclasses
- If a subclass doesn't implement all abstract methods, it must also be declared abstract
- Cannot be instantiated directly

### Differences from Interfaces

- Can have instance variables and constructors
- Can provide method implementations (concrete methods)
- A class can extend only one abstract class, but implement multiple interfaces

### Use Cases

- Defining a common base class with some default functionality
- Declaring non-public members (which interfaces can't have)
- When you want to share code among several closely related classes

## 8. Interfaces

- Contract specifying a set of methods that a class must implement
- Use `implements` keyword

```java
public interface Drivable {
    void accelerate();
    void brake();
}

public class Car implements Drivable {
    public void accelerate() { /* implementation */ }
    public void brake() { /* implementation */ }
}
```

## 9. Collections

### Arrays

- Fixed-size container for elements of the same type

```java
int[] numbers = new int[5];
numbers[0] = 10;
```

### ArrayList

- Dynamic-size array implementation

```java
import java.util.ArrayList;

ArrayList<String> list = new ArrayList<>();
list.add("Hello");
list.remove(0);
String item = list.get(0);
```

## 10. Exception Handling

- Mechanism to handle runtime errors

```java
try {
    // Code that may throw an exception
} catch (Exception e) {
    // Handle the exception
} finally {
    // Code that always executes
}
```

## 11. File I/O

- Reading from and writing to files

```java
import java.io.*;

// Reading
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    String line = reader.readLine();
}

// Writing
try (BufferedWriter writer = new BufferedWriter(new FileWriter("file.txt"))) {
    writer.write("Hello, World!");
}
```

## 12. Lambda Expressions (Java 8+)

- Concise way to represent anonymous functions

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.forEach(n -> System.out.println(n));
```

## 13. Streams API (Java 8+)

- Provides a functional approach to processing collections

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
List<String> filteredNames = names.stream()
                                  .filter(name -> name.startsWith("A"))
                                  .collect(Collectors.toList());
```

## 14. Overriding equals(), hashCode(), and toString()

### equals() Method

- Used for object comparison
- Override to define custom equality logic

```java
@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Fruit fruit = (Fruit) o;
    return name.equals(fruit.name) && color.equals(fruit.color);
}
```

### hashCode() Method

- Used by hash-based collections (e.g., HashMap, HashSet)
- Must be overridden if equals() is overridden

```java
@Override
public int hashCode() {
    return Objects.hash(name, color);
}
```

### toString() Method

- Provides a string representation of an object
- Useful for debugging and logging

```java
@Override
public String toString() {
    return "Fruit{name='" + name + "', color='" + color + "'}";
}
```

## 14. Records (Java 16+)

- Compact syntax for creating immutable data classes
- Introduced as a preview feature in Java 14, standardized in Java 16
- Automatically generates constructor, getters, equals(), hashCode(), and toString()

```java
public record Fruit(String name, String color, String origin) {}
```

### Usage

```java
Fruit apple = new Fruit("Apple", "Red", "USA");
System.out.println(apple.name()); // Getter
System.out.println(apple); // toString()
```

### Characteristics

- Final class (cannot be extended)
- All fields are private and final
- Cannot extend other classes (but can implement interfaces)
- Predefined set of methods that can't be removed

### Benefits

- Reduced boilerplate code
- Improved readability
- Built-in immutability

## 16. Interfaces

- Define a contract for classes, specifying methods that must be implemented
- Enable abstraction and a form of multiple inheritance in Java

### Syntax and Basic Usage

```java
public interface Motorise {
    void pleinEssence();  // Implicitly public and abstract
}

public class Voiture implements Motorise {
    @Override
    public void pleinEssence() {
        System.out.println("Remplissage du réservoir");
    }
}
```

### Default Methods (Java 8+)

- Provide default implementations in interfaces

```java
public interface Motorise {
    default void pleinEssence() {
        System.out.println("Implémentation par défaut");
    }
}
```

### Multiple Interface Implementation

```java
public class Voiture implements Motorise, Pneumatiques {
    // Must implement all methods from both interfaces
    // unless they have default implementations
}
```

### Key Points

- Interface methods are implicitly public and abstract
- Interfaces can't have instance fields (only static final fields)
- A class can implement multiple interfaces
- Used for defining common behavior for unrelated classes
- Useful for achieving loose coupling in applications

### Differences from Abstract Classes

- Interfaces can't have instance fields
- Classes can implement multiple interfaces, but extend only one abstract class
- Interfaces define a contract, while abstract classes can provide some implementation

## 18. Inner Classes and Anonymous Classes

### Inner Classes

- Classes defined within another class
- Useful for organizing code and encapsulation

```java
public class Fruit {
    public FruitInterne fruitInterne = new FruitInterne();

    public class FruitInterne {
        public String nomInterne = "nom interne";
    }
}

// Usage
var fruit = new Fruit();
System.out.println(fruit.fruitInterne.nomInterne);
```

### Anonymous Classes

- Classes without a name, defined and instantiated at the same time
- Often used for implementing interfaces or extending classes on-the-fly

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

// Usage with anonymous class
var classeEnglobante = new ClasseEnglobante();
classeEnglobante.afficherAvecCallback(new CallBack() {
    @Override
    public void affichageCallback() {
        System.out.println("Mon callback personnalisé");
    }
});
```

### Key Points

- Inner classes have access to the enclosing class's members, even if they're private
- Anonymous classes are useful for one-time use implementations
- Both can be used to achieve better encapsulation
- Anonymous classes are often replaced by lambda expressions in modern Java (for functional interfaces)

### Use Cases

- Inner classes: Organizing code that's only used in one place
- Anonymous classes: Event handlers, callbacks, or implementing simple interfaces on-the-fly

## 19. Enumerations (Enum)

- Special data type for defining collections of constants
- Useful for representing fixed sets of values

### Creating an Enumeration

```java
public enum Jour {
    LUNDI, MARDI, MERCREDI, JEUDI, VENDREDI, SAMEDI, DIMANCHE
}
```

### Using an Enumeration

As a variable type:

```java
Jour jour;
```

As a class attribute:

```java
public record Exemple(Jour jour) {}
```

In method calls or constructors:

```java
new Exemple(Jour.DIMANCHE);
```

### Key Points

- Enums are implicitly `final` and `static`
- Can be used in switch statements
- Have methods like `values()` to get all enum constants
- Can have fields, constructors, and methods

### Use Cases

- Representing days of the week, months, seasons
- Defining a fixed set of options or states
- Improving code readability and type safety

Remember, enumerations provide a powerful way to represent and work with fixed sets of constants in Java, enhancing code clarity and reducing errors.

Remember, this cheat sheet is a starting point. As you continue learning Java, you can expand on these concepts and add more advanced topics. Happy coding!
