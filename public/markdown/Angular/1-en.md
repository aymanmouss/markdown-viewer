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

# Encapsulation of Views and Styles in Angular

## 1. Shadow DOM

Shadow DOM is a web standard that allows for the encapsulation of DOM elements within the main DOM. It creates an additional separation between certain HTML elements to isolate their JavaScript and styles.

### Benefits:

- Better separation of styles and JavaScript
- Prevents unintended impacts on other elements in the application
- Advantageous for large applications

Shadow DOM is part of native Web Components, but browser adoption has been slow. As a result, frameworks like Angular have implemented their own versions.

## 2. Angular and Shadow DOM

Angular doesn't use Shadow DOM directly but emulates its separation by adding specific attributes to elements.

### Default Behavior:

- Angular uses Shadow DOM emulation by default
- In component metadata, it adds: `encapsulation: ViewEncapsulation.Emulated`

### Customizing Encapsulation:

1. To remove emulation:

   - Add `encapsulation: ViewEncapsulation.None` to component metadata

2. To use actual Shadow DOM (for modern browsers only):
   - Add `encapsulation: ViewEncapsulation.ShadowDom` to component metadata

### Example of Using Shadow DOM in Angular:

```typescript
import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-my-component",
  templateUrl: "./my-component.component.html",
  styleUrls: ["./my-component.component.css"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MyComponentComponent {}
```

When using Shadow DOM, you can observe a `#shadow-root` added in your browser's inspector.

## Conclusion

Angular's default approach is to use style and JavaScript encapsulation rather than true Shadow DOM. This allows for better separation and improved code maintainability while ensuring compatibility across browsers.

# Overview of Data Binding in Angular

## 1. What is Data Binding?

Data binding is a core concept in Angular that establishes a connection between the application UI and the application logic. It allows for automatic synchronization of data between the model and the view components.

### Key Points:

- Data binding declares the relationship between an HTML element and a data source.
- Angular handles the necessary connections based on these declarations.
- It eliminates the need for manual DOM manipulation for initial rendering, event listening, and updating values.
- Data binding is at the heart of an application's reactivity.

## 2. Angular and Data Binding

Angular offers a rich variety of data binding techniques, each suited for different use cases. This flexibility allows developers to optimize application performance by choosing the most appropriate binding method for each scenario.

### Types of Data Binding in Angular:

1. **Interpolation** (`{{ }}`)

   - Displays component property values in the view.

2. **Property Binding** (`[property]`)

   - Sets values for properties of view elements or directives.

3. **Event Binding** (`(event)`)

   - Listens for and responds to user actions such as keystrokes, mouse movements, clicks, and touches.

4. **Attribute Binding** (`[attr.attributeName]`)

   - Sets values for attributes directly.

5. **Class Binding** (`[class.className]`)

   - Adds or removes CSS class names dynamically.

6. **Style Binding** (`[style.styleName]`)

   - Sets inline styles dynamically.

7. **Two-way Data Binding** (`[(ngModel)]`)
   - Combines property binding and event binding for two-way synchronization between view and component.

Each of these binding types serves a specific purpose and contributes to creating dynamic and responsive Angular applications. Understanding when and how to use each type of binding is crucial for effective Angular development.

# Event Binding in Angular

Event binding is a crucial part of Angular's data binding system, allowing components to respond to user actions. It enables data flow from elements to components, complementing property binding which flows data in the opposite direction.

## 1. Basic Concept

Event binding listens for DOM events such as mouse movements, keystrokes, or clicks, and executes a specified method in the component when the event occurs.

### Basic Syntax:

```html
<button (click)="sauvegarde()">Sauvegarder</button>
```

In this example, we're listening for the `click` event on a button element and executing the `sauvegarde()` method in our component when clicked.

### Alternative (Canonical) Syntax:

```html
<button on-click="sauvegarde()">Sauvegarder</button>
```

## 2. Target Events

The list of available events corresponds to standard DOM HTML events. These are the events that JavaScript (and by extension, Angular) can react to when they occur.

To bind to an event, wrap the event name in parentheses, like `(click)` in the example above.

## 3. The $event Object

In event binding, Angular sets up an event handler for the target event. When the event occurs, this handler executes the template expression.

The binding passes information about the event, including data values, through an event object called `$event`.

- For native DOM events, `$event` is a DOM event object with properties like `target` and `target.value`.

### Example:

```html
<input [value]="nom" (input)="nom=$any($event.target).value" />
```

In this example:

- We bind the `value` property of the input to the `nom` property in our component.
- We listen for the `input` event (triggered when the user types in the input).
- When the `input` event occurs, we update `nom` with the new value from the input.

Note: `$any()` is used to disable TypeScript type checking for this expression. This is necessary when using strict mode to allow use of `value` in the expression.

## 4. Handling Events

The component typically defines methods that handle these events. These methods can perform actions, update component state, or trigger other processes in response to user interactions.

Remember that event binding is a key part of creating interactive Angular applications, allowing your app to respond dynamically to user actions.

# Event Binding in Angular

Event binding is a crucial part of Angular's data binding system, allowing components to respond to user actions. It enables data flow from elements to components, complementing property binding which flows data in the opposite direction.

## 1. Basic Concept

Event binding listens for DOM events such as mouse movements, keystrokes, or clicks, and executes a specified method in the component when the event occurs.

### Basic Syntax:

```html
<button (click)="sauvegarde()">Sauvegarder</button>
```

In this example, we're listening for the `click` event on a button element and executing the `sauvegarde()` method in our component when clicked.

### Alternative (Canonical) Syntax:

```html
<button on-click="sauvegarde()">Sauvegarder</button>
```

## 2. Target Events

The list of available events corresponds to standard DOM HTML events. These are the events that JavaScript (and by extension, Angular) can react to when they occur.

To bind to an event, wrap the event name in parentheses, like `(click)` in the example above.

## 3. The $event Object

In event binding, Angular sets up an event handler for the target event. When the event occurs, this handler executes the template expression.

The binding passes information about the event, including data values, through an event object called `$event`.

- For native DOM events, `$event` is a DOM event object with properties like `target` and `target.value`.

### Example:

```html
<input [value]="nom" (input)="onInputChange($event)" />
```

## 4. Handling Events in a Component

Let's create a more comprehensive example with a component class to demonstrate event binding:

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-event-binding-demo",
  template: `
    <h2>Event Binding Demo</h2>
    <input
      [value]="nom"
      (input)="onInputChange($event)"
      placeholder="Enter your name"
    />
    <p>Hello, {{ nom }}!</p>
    <button (click)="onClickButton($event)">Click me!</button>
    <p>Button clicked {{ clickCount }} times.</p>
  `,
})
export class EventBindingDemoComponent {
  nom: string = "";
  clickCount: number = 0;

  onInputChange(event: Event): void {
    this.nom = (event.target as HTMLInputElement).value;
  }

  onClickButton(event: MouseEvent): void {
    this.clickCount++;
    console.log("Button clicked!", event);
  }
}
```

In this example:

1. We have an input field that updates the `nom` property using event binding on the `input` event.
2. We display the current value of `nom` using interpolation.
3. We have a button that increments a click counter and logs to the console using event binding on the `click` event.
4. The component class (`EventBindingDemoComponent`) contains the properties and methods that are bound to in the template.

### Explanation:

- `(input)="onInputChange($event)"`: This binds the input event to the `onInputChange` method. When the user types in the input, this method is called with the `$event` object.

- `(click)="onClickButton($event)"`: This binds the click event to the `onClickButton` method. When the button is clicked, this method is called with the `$event` object.

- In the `onInputChange` method, we cast `event.target` to `HTMLInputElement` to access the `value` property. This updates the `nom` property of our component.

- In the `onClickButton` method, we increment the `clickCount` and log the event object to the console.

This example demonstrates how event binding allows us to respond to user actions and update our component's state accordingly, creating an interactive application.
