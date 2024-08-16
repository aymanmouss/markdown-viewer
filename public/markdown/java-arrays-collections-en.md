# Java Collection Interfaces

## Introduction

This overview covers the main interfaces of Java collections, their relationships, and basic characteristics.

## Hierarchy of Collection Interfaces

```
       Iterable
          |
      Collection
      /       \
   List       Set
               |
           SortedSet

   Map
    |
 SortedMap
```

## Main Collection Types

### List

- Ordered collection
- Elements are ordered by their sequence of addition
- Allows duplicate elements

### Set

- Similar to List but ensures each element is unique
- Uses the `equals` method of the element type to ensure uniqueness

#### SortedSet

- A Set that maintains its elements in a sorted order

### Map

- Stores elements as key-value pairs
- Does not inherit from Collection interface
- Different structure compared to List and Set

#### SortedMap

- A Map that maintains its keys in a sorted order

## Key Differences

1. **List vs Set**:

   - List allows duplicates, Set doesn't
   - List maintains insertion order, Set doesn't (unless it's a SortedSet)

2. **Map vs List/Set**:
   - Map uses key-value pairs, others use single elements
   - Map doesn't inherit from Collection due to its different structure

## Common Implementations

The lesson mentions that there are specific classes implementing these interfaces, such as:

- For List: ArrayList, LinkedList
- For Set: HashSet, TreeSet
- For Map: HashMap, TreeMap

(Note: Specific details about these implementations are not provided in this lesson)

This overview provides a foundation for understanding collections in Java. Each collection type has its own characteristics and use cases, which you can explore further as you deepen your Java knowledge.

## 1. Java Arrays (Les tableaux)

## Introduction

- An array in Java is a data structure containing a group of elements of the same type.
- Arrays have consecutive memory addresses and a fixed number of elements.
- It's impossible to change the size of an array after creation.

## Multi-dimensional Arrays

### Creation

- Java supports arrays of N dimensions (commonly up to 2 or 3 dimensions).
- Examples of declarations:
  ```java
  int[] integers;             // 1-dimensional
  int[][] integers2;          // 2-dimensional
  int[][][] integers3;        // 3-dimensional
  ```
- Examples of instantiation:
  ```java
  integers = new int[]{1, 2, 1};
  integers2 = new int[][]{ {3, 2, 1}, {1, 3, 2}, {1, 1, 4} };
  var integers3 = new int[][][]{
      { {1, 2, 3}, {4, 5, 6} },
      { {7, 8, 9} },
      { {10, 11, 12}, {13, 14, 15} },
  };
  ```

### Reading

- Access specific elements using index notation:
  ```java
  System.out.println(integers3[1][0][1]);  // Outputs 8
  ```

### Writing

- Modify specific elements:
  ```java
  integers3[1][0][1] = 20;  // Changes 8 to 20
  ```

### Iteration

- Use nested loops to iterate through multi-dimensional arrays:
  ```java
  for (int[][] firstDimension : integers3) {
      for (int[] secondDimension : firstDimension) {
          for (int thirdDimension : secondDimension) {
              System.out.println(thirdDimension);
          }
      }
  }
  ```
- Note: Deeply nested loops may cause performance issues with large datasets.

## Arrays and null

### Native Arrays

- Cannot add null values to native type arrays:
  ```java
  var list = new int[]{1, 1, 1, null};  // Not possible, compilation error
  ```

### Object Arrays

- Can contain null values:
  ```java
  var list = new String[]{"jd", "iod", null};  // Allowed
  ```

## 2. Java ArrayList Overview

## Introduction

ArrayList is a commonly used implementation of the List interface in Java, providing a resizable array structure.

## Basic Usage

### Import

```java
import java.util.ArrayList;
```

### Creation

```java
ArrayList<String> list = new ArrayList<String>();
// Or using the diamond operator
var list = new ArrayList<String>();
```

## Key Characteristics

1. **Ordered**: Elements maintain the order in which they are added.
2. **Mutable**: Can change in size, unlike arrays.
3. **Allows Duplicates**: Can contain duplicate elements.
4. **Allows Null**: Can contain null values.

## Common Operations

### Adding Elements

```java
list.add("First");                 // Adds to the end
list.add(1, "Before Second");      // Adds at specific index
```

### Accessing Elements

```java
String element = list.get(2);      // Gets element at index 2
```

### Modifying Elements

```java
list.set(2, "New Third");          // Changes element at index 2
```

### Removing Elements

```java
list.remove(2);                    // Removes element at index 2
```

### Checking for Elements

```java
boolean contains = list.contains("First");
```

## Multi-dimensional ArrayList

```java
var space = new ArrayList<ArrayList<ArrayList<Integer>>>();
space.add(new ArrayList<ArrayList<Integer>>());
space.get(0).add(new ArrayList<Integer>());
space.get(0).get(0).add(25);  // Adds value 25 at position (0, 0, 0)
```

## Null Values

```java
var list = new ArrayList<String>();
list.add("value 1");
list.add(null);
list.add("value 2");
// Result: [value 1, null, value 2]
```

## Key Points to Remember

- ArrayList is more flexible than arrays but may have slightly lower performance.
- Useful when you need a resizable list of elements.
- Maintains insertion order.
- Allows duplicates and null values.
- Provides easy access to elements by index.

## 3. Java Set Types Overview

## Introduction

Sets in Java are collections that do not allow duplicate elements. They are similar to Lists but with more restrictions on element uniqueness.

## HashSet

### Characteristics

- Implements the Set interface
- Does not maintain any specific order of elements
- Does not allow duplicates
- Allows one null value

### Usage

```java
import java.util.HashSet;

var set = new HashSet<Integer>();
set.add(55);
set.add(2);
set.add(2);  // This won't be added (duplicate)
set.add(null);
System.out.println(set);  // Might output: [null, 2, 55]
```

### Methods

- `add(element)`: Adds an element to the set
- `contains(element)`: Checks if the set contains the element

## TreeSet

### Characteristics

- Implements the SortedSet interface
- Maintains elements in a sorted order
- Does not allow duplicates
- Does not allow null values

### Usage

```java
import java.util.TreeSet;

var sortedSet = new TreeSet<String>();
sortedSet.add("abcd");
sortedSet.add("dbca");
sortedSet.add("bdz");
System.out.println(sortedSet);  // Outputs: [abcd, bdz, dbca]
```

### Custom Sorting with Comparator

```java
import java.util.Comparator;

var customSortedSet = new TreeSet<String>(new Comparator<String>() {
    @Override
    public int compare(String o1, String o2) {
        return o2.compareTo(o1);  // Reverse alphabetical order
    }
});
```

## Comparator Logic

- `compare(o1, o2)` returns an integer:
  - < 0: o1 is considered smaller than o2
  - = 0: o1 and o2 are considered equal
  - > 0: o1 is considered larger than o2

## Key Points

1. Sets ensure uniqueness of elements.
2. HashSet is unordered and allows one null element.
3. TreeSet maintains a sorted order and doesn't allow null elements.
4. Custom sorting can be achieved in TreeSet using Comparators.

## Imports

```java
import java.util.HashSet;
import java.util.TreeSet;
import java.util.Comparator;  // When using custom comparators
```

## 4. Java Maps: Key-Value Associations

### Introduction

- Maps are collections that work with key-value pairs
- Each entry in a Map has two elements: a key and a value
- Maps are powerful for linking values to indexes and improving data access performance
- Reading time: 4 minutes

### Key Characteristics

- Maps require two different types in the diamond operator `<>`
- These types define the key and value types of the collection

### HashMap

- Most common implementation of the Map interface
- Example definition: `var departements = new HashMap<Integer, String>();`
- Methods:
  - `put(key, value)`: Adds or modifies an entry
  - `get(key)`: Retrieves a value by its key
  - `remove(key)`: Removes an entry by its key
  - `containsKey(key)`: Checks if a key exists
  - `containsValue(value)`: Checks if a value exists

#### Example usage:

```java
var departements = new HashMap<Integer, String>();
departements.put(1, "Ain");
departements.put(2, "Aisne");
departements.put(3, "Allier");

departements.put(1, "Ain"); // Creates 1 / Ain in the collection if key 1 doesn't exist
departements.put(1, "Ain modifié"); // Modifies the entry with key 1

var ain = departements.get(1); // Reads the value "Ain"
departements.remove(2); // Removes department 2: Aisne
```

### TreeMap

- Implements the SortedMap interface
- Allows custom sorting of entries
- Sorting is defined similar to TreeSet, using a Comparator

#### Example with Comparator:

```java
var departements = new TreeMap<Integer, String>(new Comparator<Integer>() {
    @Override
    public int compare(Integer o1, Integer o2) {
        return o1 - o2;
    }
});
```

### Iterating over Maps

```java
for (Map.Entry departement : departements.entrySet()) {
    System.out.println("clé: " + departement.getKey() + " | valeur: " + departement.getValue());
}
```

### Null Handling

- HashMap:
  - Allows null keys: `departements.put(null, "Ain");`
  - Allows null values: `departements.put(1, null);`
- TreeMap does not allow null keys (throws NullPointerException)

### Important Imports

```java
import java.util.HashMap;
import java.util.TreeMap;
import java.util.Map;
```

Remember to import these classes when working with Maps in Java.

### Key Points to Remember

- Maps use key-value pairs for efficient data storage and retrieval
- HashMap is the most commonly used Map implementation
- TreeMap allows for sorted key-value pairs
- Both implementations offer methods for adding, retrieving, and removing entries
- Maps can be iterated over using the entrySet() method
- Be aware of null handling differences between HashMap and TreeMap

# Understanding Why You Need to Override `hashCode` and `equals` in Java

In Java, the `hashCode` and `equals` methods are crucial when working with objects, especially when these objects are used in collections like `HashMap`, `HashSet`, or `Hashtable`. Here's why you often need to override them, even though the `hashCode` and `equals` methods are already provided by the `Object` class:

## 1. Default Behavior of `hashCode` and `equals`

- **`hashCode` Method:**
  - The default implementation of `hashCode` in the `Object` class returns a memory address-based integer representation of the object. This means each object will have a unique `hashCode` unless the objects are the same instance (i.e., have the same memory address).
- **`equals` Method:**
  - The default implementation of `equals` in the `Object` class checks for reference equality. In other words, it returns `true` only if two references point to the exact same object in memory.

## 2. Reason for Overriding

- **Custom Equality Logic:**

  - Often, you want two objects to be considered equal based on specific fields or properties rather than their memory address. For example, in a `Person` class, you might want two `Person` objects to be considered equal if they have the same `name` and `dateOfBirth`, even if they are different instances.
  - To achieve this, you need to override the `equals` method to implement your custom equality logic.

- **Consistent Hashing:**
  - When you override `equals`, you should also override `hashCode`. This is because collections like `HashMap` and `HashSet` use `hashCode` to quickly locate the bucket where an object might be stored.
  - If two objects are considered equal according to the `equals` method, they must have the same `hashCode`. Otherwise, the objects might not behave correctly in hash-based collections. For example, if you put an object in a `HashMap` and later try to retrieve it using another object that is "equal" to the first one (according to `equals`), it might not be found if their `hashCode`s differ.

## 3. Contract Between `hashCode` and `equals`

- The general contract is:
  - If two objects are equal according to `equals`, they must have the same `hashCode`.
  - If two objects have the same `hashCode`, they are not necessarily equal according to `equals`, but it is a good practice to design `hashCode` in a way that reduces the likelihood of hash collisions (i.e., different objects having the same `hashCode`).

## 4. Practical Implications

- **Collections:** If you store objects in a `HashMap`, `HashSet`, or similar collections, failing to override `equals` and `hashCode` can lead to unexpected behavior, like missing elements, incorrect duplicates, or issues with retrieval.
- **Business Logic:** Overriding `equals` ensures that your objects are compared based on meaningful criteria, which is essential for implementing business logic correctly.

## 5. Example Scenario

Consider a `Person` class:

```java
public class Person {
    private String name;
    private String ssn; // Social Security Number

    public Person(String name, String ssn) {
        this.name = name;
        this.ssn = ssn;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return ssn.equals(person.ssn); // Two persons are considered equal if they have the same SSN
    }

    @Override
    public int hashCode() {
        return ssn.hashCode(); // The hashCode is based on SSN
    }
}
```
