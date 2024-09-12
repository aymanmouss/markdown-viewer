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

# Java 8 Date and Time API

## Introduction

The Java 8 Date and Time API (java.time.\*) was introduced to address shortcomings of the older Date and Calendar classes:

- Simpler and more intuitive to use
- Immutable and thread-safe
- More comprehensive functionality

## Key Classes

### Instant

- Encapsulates a timestamp
- Example: `Instant.now()`

### LocalDate

- Represents a date (year, month, day) without time or time zone
- Example: `LocalDate.of(2014, Month.DECEMBER, 25)`

### LocalTime

- Represents a time (hour, minute, second, nanosecond) without date or time zone
- Example: `LocalTime.of(12, 32, 22, 24)`

### LocalDateTime

- Combines date and time without a time zone
- Example: `LocalDateTime.of(2014, Month.DECEMBER, 25, 12, 32, 22, 23)`

### Time Zones and Offsets

- ZoneId: Encapsulates a time zone
- ZoneOffset: Represents a time zone offset
- OffsetTime: Time with an offset
- ZonedDateTime: Date and time with a time zone
- OffsetDateTime: Date and time with an offset

### Calendars

- Default: ISO-8601 (Gregorian)
- Other standards: Hijrah, Japanese, Minguo, ThaiBuddhist

## Key Features

- Immutability: Objects are thread-safe
- Comprehensive: Supports dates, times, intervals, calendars, time zones
- Intuitive: Month numbering starts at 1, not 0

## Further Reading

- JSR 310 for detailed specifications
- Official Java Date and Time API documentation

# Duration and Period Classes in Java

Reading time: 2 minutes

## The Duration Class

The Duration class encapsulates a duration measured in milliseconds in an immutable manner. A Duration object does not have any calendar system or time zone.

Examples of using the Duration class:

```java
var durationNano = Duration.ofNanos(1000000);
var durationMillis = Duration.ofMillis(1000);
var durationSeconds = Duration.ofSeconds(1);
var durationMinutes = Duration.ofMinutes(3);
var durationHours = Duration.ofHours(1);
var durationDays = Duration.ofDays(2);
```

For initialization, it's possible to start from several input units. It's even possible to obtain the duration between two datetimes:

```java
var firstDate = LocalDateTime.of(2022, 1, 1, 0, 0, 0);
var secondDate = LocalDateTime.of(2022, 6, 6, 14, 0, 0);
var datesDifference = Duration.between(firstDate, secondDate);
System.out.println(datesDifference.getSeconds());
```

Since Duration encapsulates a duration in milliseconds, we can obtain the difference between two datetimes, but not between two simple dates, which would result in a runtime error.

## The Period Class

The Period class encapsulates a period of time: it's a quantity of time expressed in the form of different fields allowing to represent a period in a human-readable way, such as one year, five months, and eight days.

Example of using the Period class:

```java
var period = Period.of(2, 3, 2);
System.out.println(period.getDays());
System.out.println(period.getMonths());
System.out.println(period.getYears());
```

Unlike Duration, it's possible to obtain the difference between two simple dates:

```java
var firstDate = LocalDate.of(2022, 1, 1);
var secondDate = LocalDate.of(2023, 6, 6);
var difference = Period.between(firstDate, secondDate);
System.out.println(difference);
```

By default, the difference gives the number of years, months, and days. It's also possible to have the difference in total number of days, for example (using the ChronoUnit class):

```java
var firstDate = LocalDate.of(2022, 1, 1);
var secondDate = LocalDate.of(2023, 6, 6);
var difference = ChronoUnit.DAYS.between(firstDate, secondDate);
System.out.println(difference);
```

# Date Formatting in Java

Reading time: 2 minutes

## Introduction

While we've seen how to represent dates technically in Java objects, displaying these dates using `toString()` isn't always user-friendly. To solve this problem, there are classes that allow displaying dates in the desired format.

We'll look at how to format dates using two APIs present in Java: `java.util` and `java.time`.

## Formatting dates from java.util.\*

### java.text.DateFormat and java.util.SimpleDateFormat

The abstract class `DateFormat` and its standard implementation `SimpleDateFormat` are used for this purpose.

Example of displaying a date in a specific format:

```java
var today = new Date();
var format = new SimpleDateFormat("'on' dd MMMM yyyy 'at' HH:mm:ss Z");
System.out.println(format.format(today)); // Displays: on 09 June 2023 at 15:33:32 +0200
```

### Possible Formats

To construct `SimpleDateFormat`, you can use the following key characters:

| Letter | Description          | Example                              |
| ------ | -------------------- | ------------------------------------ |
| G      | Era                  | AD (Anno Domini), BC (Before Christ) |
| y      | Year                 | 06; 2006                             |
| M      | Month in year        | September; Sept.; 07                 |
| w      | Week in year         | 34                                   |
| W      | Week in month        | 2                                    |
| D      | Day in year          | 192                                  |
| d      | Day in month         | 23                                   |
| F      | Day of week in month | 17                                   |
| E      | Day of week          | Wednesday; Wed.                      |
| a      | AM/PM marker         | PM, AM                               |
| H      | Hour (0-23)          | 23                                   |
| k      | Hour (1-24)          | 24                                   |
| K      | Hour in AM/PM (0-11) | 6                                    |
| h      | Hour in AM/PM (1-12) | 7                                    |
| m      | Minutes              | 59                                   |
| s      | Seconds              | 59                                   |
| S      | Milliseconds         | 12564                                |
| z      | General time zone    | CEST; Central European Summer Time   |
| Z      | Time zone (RFC 822)  | +0200                                |

Any character between two quotes like 'on ' will not be interpreted and will appear as is in the date display.

## Formatting dates from java.time.\*

### java.time.format.DateTimeFormatter

Here's how to format dates using `DateTimeFormatter`:

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

### Possible Formats

You can use the following constants to directly apply a standard format:

| Name                 | Role                                                          | Example                                            |
| -------------------- | ------------------------------------------------------------- | -------------------------------------------------- |
| BASIC_ISO_DATE       | Basic ISO format for date without time offset                 | "20141225"                                         |
| ISO_DATE             | ISO format for date with or without time offset               | "2014-12-25", "2014-12-25+01:00"                   |
| ISO_DATE_TIME        | ISO format for date-time with or without time zone and offset | "2014-12-25T00:00:00", "2014-12-25T10:00:00+01:00" |
| ISO_INSTANT          | ISO format for date-time in UTC                               | "2014-12-25T00:00:00Z"                             |
| ISO_LOCAL_DATE       | ISO format for date without time zone or offset               | "2014-12-25"                                       |
| ISO_LOCAL_DATE_TIME  | ISO format for date-time without time zone or offset          | "2014-12-25T00:00:00"                              |
| ISO_LOCAL_TIME       | ISO format for time without time zone or offset               | "20:15", "20:15:30"                                |
| ISO_OFFSET_DATE      | ISO format for date with time offset                          | "2014-12-25+01:00"                                 |
| ISO_OFFSET_DATE_TIME | ISO format for date-time with time offset                     | "2014-12-25T00:00:00+01:00"                        |
| ISO_OFFSET_TIME      | ISO format for time with time offset                          | "10:15+01:00", "10:15:30+01:00"                    |
| ISO_ORDINAL_DATE     | ISO format for date expressed as day of year without offset   | "2014-359", "2014-359+01:00"                       |
| ISO_TIME             | ISO format for time with or without offset                    | "10:15", "10:15:30", "10:15:30+01:00"              |
| ISO_WEEK_DATE        | ISO format for date expressed as week of year without offset  | "2014-W52-4", "2014-W52-4+01:00"                   |
| ISO_ZONED_DATE_TIME  | ISO format with time zone and offset                          | "2014-12-25T00:00:00+01:00[Europe/Paris]"          |
| RFC_1123_DATE_TIME   | RFC-1123 / RFC 822 format                                     | "Thu, 25 Dec 2014 00:00:00 +0100"                  |

It's also possible to define custom formats using various symbols like 'G' for era, 'y' for year, 'M' for month, etc. Refer to the Java documentation for a complete list of format symbols.
