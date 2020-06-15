### Directory Layout

Before you start, take a moment to see what the project structure looks like:

```md
.
├── /docs/              # Documentation files for the project
├── /node_modules/      # 3rd-party libraries and utilities
├── /public/            # Static files which are copied into the /build/public folder
├── /src/               # The source code of the application
│ ├── /appFixtures/     # Mockup data used in the table page
│ ├── /components/      # Project components (in semantic folders see [Terminology](./terminology.md))
│ ├── /images/          # Icons and images used in the project
│ ├── /styling/         # General styling and themes applied on the components
│ │ ├──  /themes/       # default and brand themes for the component styling
├── package.json        # The list of 3rd party libraries and utilities
└── package-lock.json   # Fixed versions of all the dependencies
```