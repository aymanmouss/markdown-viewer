# Introduction to Exceptions in Java

## Why Error Handling?

Consider the following program:

```java
var chaine = "chaine";
var entier = Integer.parseInt(chaine);
```

This code compiles without issues but throws a runtime exception:

```
Exception in thread "main" java.lang.NumberFormatException: For input string: "chaine"
```

This is called an exception. Unhandled exceptions can cause program crashes and need to be addressed.

## Types of Errors in Java

Java organizes error classes in the following hierarchy:

```
Throwable
├── Error
└── Exception
    └── RuntimeException
```

### Three Types of Exceptions:

1. **Error**

   - Represents severe errors in the Java Virtual Machine or Java subsystem
   - Causes immediate termination of the Java application
   - Usually related to technical issues (e.g., out of memory) rather than program logic

2. **Exception (Checked Exception)**

   - Represents errors related to program execution
   - Must be handled in the code, or the program won't compile
   - Managed using try/catch/finally blocks

3. **RuntimeException (Unchecked Exception)**
   - Subclass of Exception
   - Not required to be handled for compilation
   - Can cause runtime crashes if not managed (e.g., NumberFormatException)
   - Recommended to handle these to prevent unexpected program termination

Understanding and properly handling these exception types is crucial for developing robust Java applications.

# Java Exception Handling: try/catch/finally Blocks

## Basic Syntax

Java uses try/catch/finally blocks to handle exceptions (both Exception and RuntimeException types). The basic syntax is:

```java
try {
    // Risky operations
} catch (SpecificException e) {
    // Handle specific exception
} catch (AnotherException e) {
    // Handle another exception
} catch (Exception e) {
    // Handle general exceptions
} finally {
    // Clean-up code (optional)
}
```

Key points:

- The `try` block contains code that might throw exceptions.
- Multiple `catch` blocks can handle different types of exceptions.
- The `finally` block is optional and contains clean-up code that always executes.

## Important Notes

1. The `finally` block is becoming less common in modern Java programming.
2. Catch blocks must be ordered from most specific to most general exceptions.

## Catch Block Order

Incorrect order can lead to compilation errors. For example:

```java
try {
    int result = 3 / 0;
} catch (Exception e) {
    // General exception handler
} catch (ArithmeticException e) {
    // Specific exception handler
}
```

This code will not compile because `ArithmeticException` is more specific than `Exception`. The correct order would be:

```java
try {
    int result = 3 / 0;
} catch (ArithmeticException e) {
    // Specific exception handler
} catch (Exception e) {
    // General exception handler
}
```

Remember: Always catch more specific exceptions before more general ones.

# Custom Exceptions in Java

## Defining a Custom Exception

To create a custom exception, extend the `Exception` class:

```java
public class SaisieErroneeException extends Exception {
    public SaisieErroneeException() {
        super();
    }

    public SaisieErroneeException(String s) {
        super(s);
    }
}
```

Key points:

- Extend `Exception` to create checked exceptions.
- Provide multiple constructors for flexibility.
- By convention, include "Exception" in the name of your custom exception.

## Throwing an Exception

Use the `throw` keyword to generate an exception:

```java
var scanner = new Scanner(System.in);
var saisie = scanner.nextLine();
if (saisie.length() == 0) {
    throw new SaisieErroneeException("La saisie utilisateur ne doit pas être vide");
}
```

## Declaring Exceptions in Method Signatures

When a method can throw a checked exception, declare it in the method signature using `throws`:

```java
public static void main(String[] args) throws SaisieErroneeException {
    // Method implementation
}
```

This informs callers that they need to handle or propagate the exception.

# Try-with-resources in Java

## Purpose

The try-with-resources statement is used to automatically close resources that implement the `Closeable` interface, such as files, streams, and database connections.

## Key Points

1. Applies to classes implementing `Closeable` interface.
2. Automatically closes resources when the try block is exited.
3. Eliminates the need for explicit resource closure in a `finally` block.
4. Simplifies code and reduces risk of resource leaks.

## Syntax

```java
try (ResourceType resource = new ResourceType()) {
    // Use the resource
} catch (Exception e) {
    // Handle exceptions
}
```

## Example

```java
try (var scanner = new Scanner(System.in)) {
    var saisieEntier = scanner.nextInt();
    System.out.println(saisieEntier);
} catch (InputMismatchException ime) {
    ime.printStackTrace();
}
```

In this example, the `Scanner` object is automatically closed when the try block is exited, regardless of whether an exception occurred or not.

## Benefits

1. Automatic resource management
2. Cleaner and more concise code
3. Reduced risk of resource leaks
4. Improved exception handling
