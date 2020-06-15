> These components use the Airbnb style guide
> [Airbnb React/JSX Guide](https://github.com/airbnb/javascript/tree/master/react).

### Table of Contents

- [Separate folder per component](#separate-folder-per-ui-component)
- [Use CSS Modules](#use-css-modules)
- [Use Classnames](#use-classnames)
- [Use PropTypes](#use-proptypes)
- [Example](#example)

### Seperate folder per component

- Place each major UI component along with its resources in a separate folder\
  This will make it easier to find related resources for any particular UI element
  (CSS, fixtures, localization files etc.). Removing such components during
  refactorings should also be easy.
- Avoid having CSS, images and other resource files shared between multiple
  components.\
  This will make your code more maintainable.
- Add `package.json` file into each component's folder.\
  This will allow to easily reference such components from other places in your code.\
  Use `import Tablerow from '../Tablerow'` instead of `import Tablerow from '../Tablerow/Tablerow.js'`

```md
/components/elements/Tablerow/package.json
/components/elements/Tablerow/Tablerow.js
/components/elements/Tablerow/Tablerow.module.css
```

```json
// components/elements/Tablerow/package.json
{
  "name": "Tablerow",
  "version": "0.0.1",
  "main": "./Tablerow.js",
  "private": true
}
```

For more information google for
[component-based UI development](https://google.com/search?q=component-based+ui+development).

### Use CSS Modules

- Use CSS Modules, this will allow using short CSS class names and at the same time avoid conflicts.
- Instead of using the CSS Modules package simply change the css file name.\
  You can change the file name from Tablerow.css to Tablerow.module.css
- Prefer CSS class selectors instead of element and `id` selectors.
- Combine multiple class selectors when you need to override other styles.
- Use `.root { }` class name for the root elements of your components.

```css
/* Tablerow.module.css */
@import "../../../styling/styling.css";

:root {
  --tablerow-selected: var(--grey6);
}

.root {
  background-color: var(--white);
  width: calc(100% - var(--layout-medium));
  margin-right: var(--layout-medium);
  min-height: 65px;
  height: 65px;
  display: flex;
}

.root.divider {
  border-bottom: 1px var(--border-inactive) solid;
}

.root.selected {
  background-color: var(--tablerow-selected);
}

.root.invisible {
  display: none;
}

.root .tablerowItemContainer {
  width: 100%;
  display: grid;
  white-space: nowrap;
  padding-right: var(--layout-extra-small);
}
```

### Use Classnames

- Classnames is a JavaScript utility for conditionally joining classNames together.

```JavaScript
// Old usage example
<main className={"class1" + " " + "class2" + " " + "class3"}>
```

```JavaScript
// New usage example
<main className={classnames("class1", "class2", "class3")}>
```

```JavaScript
// Usage example with CSS Modules
<main className={classnames(styles.class1, styles.class2, styles.class3)}>
```

If you need a class that is based on a conditional you implement this like the following example

```JavaScript
// Implementing conditionals with CSS Modules
<main className={classnames(styles.class1, styles.class2, {[styles.class3] : conditional})}>
```

### Use PropTypes

- The usage of PropTypes gives clarity on all available props that have been made

```JavaScript
//Example is taken from components/elements/button
  static propTypes = {
    /**
     * The content in the button
     */
    text: PropTypes.node.isRequired,
    /**
     * The content in the button
     */
    rounded: PropTypes.bool,
    /**
     * The button will be a small square with just the icon inside
     */
    square: PropTypes.bool,
    /**
     * The selected variant of the button
     */
    variant: PropTypes.oneOf([
      "primary",
      "secondary",
      "success",
      "edit",
      "destructive",
      "ghost",
      "word",
    ]),
    /**
     * An icon showed before the text in Button
     */
    iconBefore: PropTypes.node,
    /**
     * An icon showed after the text in Button
     */
    iconAfter: PropTypes.node,
    /**
     * The external function on the button
     */
    clickFunc: PropTypes.func.isRequired,
  };

  static defaultProps = {
    variant: "primary",
  };
```

### Example

For clarification you can find a pre-made Template Component which you can copy and then modify.
It is found in the following folder

```md
/components/templates/TemplateComponent
```
