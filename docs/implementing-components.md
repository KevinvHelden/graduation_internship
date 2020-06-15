### Importing

The components are seperated in their own folder which are grouped in semantic folders.
Each semantic folder has an index.js file that exports all components individually.
See example of components/elements/index.js below

```javascript
/**
 * Elements
 */
export { default as Button } from "./Button";
export { default as Checkbox } from "./Checkbox";
export { default as Hamburger } from "./Hamburger";
export { default as ImageSelect } from "./ImageSelect";
export { default as Inputfield } from "./Inputfield";
export { default as List } from "./List";
export { default as ListItem } from "./ListItem";
export { default as Navigation } from "./Navigation";
export { default as Searchbar } from "./Searchbar";
export { default as Tablerow } from "./Tablerow";
export { default as Textarea } from "./Textarea";
```

Because of this every component in this semantic group can be referenced like this:

```javascript
import { Button, InputField, Searchbar } from "../components/elements";
```

### Implementing

After they have been imported they can be used like you would with other components

```javascript
//Example of Button usage
<Button text={"click me!"} clickFunc={this.handleClick} rounded />
```