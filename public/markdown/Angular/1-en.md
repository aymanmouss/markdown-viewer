# Angular CLI Guide

**Reading time: 3 minutes**

## 1. ng generate

The `ng generate` or `ng g` command allows you to generate all necessary elements for Angular, primarily:

- Interfaces
- Enums
- Components
- Modules

_Note: We'll cover other elements in future lessons._

## 2. Main options for ng g component or ng g c

### Option 1: --flat

```
ng g c --flat component-name
```

- Creates component elements directly in the current directory
- Default behavior: Creates a new folder

### Option 2: --skip-tests

```
ng g c --skip-tests component-name
```

- Skips generation of unit test file (.spec.ts)
- Default behavior: Creates a unit test file

### Option 3: --inline-style

```
ng g c --inline-style component-name
ng g c -s component-name
```

- Uses inline styles instead of generating an external style file
- Default behavior: Creates an external style file

### Option 4: --inline-template

```
ng g c --inline-template component-name
ng g c -t component-name
```

- Uses an inline template instead of generating an external template file
- Default behavior: Creates an external template file

_Note: Additional options will be covered in more advanced sections of the course._
