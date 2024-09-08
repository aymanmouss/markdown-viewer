# Standard Date Classes in Java

## Introduction

- These classes may be found in legacy code
- Not recommended for use in new code
- Prefer the newer Date and Time API (covered in a future lesson)
- Understanding these classes is important for maintaining older systems

## java.util.Date and Timestamps

### Overview

- Encapsulates a timestamp
- Represents milliseconds since January 1, 1970, 00:00:00 GMT

### Usage

```java
// Get current timestamp
var date = new Date();
System.out.println(date.getTime());

// Create Date object with specific timestamp
var date = new Date(1686313491038L);
```

### Notes

- `date.getTime()` uses `System.currentTimeMillis()` internally
- Precision depends on the operating system

## java.util.Calendar

### Overview

- Encapsulates a timestamp
- Allows representation and manipulation of date/time in a calendar and time zone

### Usage

```java
// Get current calendar instance
Calendar calendar = Calendar.getInstance();
```

## java.util.GregorianCalendar

### Overview

- Concrete implementation of the abstract `Calendar` class
- Represents a Gregorian calendar

### Features

- `isLeapYear()` method to check for leap years

### Usage

```java
// Calendar.getInstance() returns a GregorianCalendar by default
Calendar calendar = Calendar.getInstance();
```

## Manipulating Calendar Instances

### Examples

```java
Calendar calendar = Calendar.getInstance();
calendar.set(Calendar.YEAR, 2023);
calendar.add(Calendar.HOUR_OF_DAY, 2);
```

## Conclusion

While these classes are important to understand for legacy code maintenance, it's recommended to use the newer Date and Time API for new Java projects.
