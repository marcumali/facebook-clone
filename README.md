# Installation

1. Before everything, run:
`npm install`
`npx lerna bootstrap`

2. Build all the packages inside
`npx lerna run build`

# Usage

## To run the main container app
`npx lerna run dev --scope=container`

## To run the component apps (e.g. friends)
`npx lerna run dev --scope=friends`

# Creating a new component and add it to the main container
The component packages uses [Storybook](https://storybook.js.org/) to visually show the components.

### Create the following files in `src/stories`
Component.tsx, Component.stories.tsx (optional: component.css)

Please refer to the Storybook's documentation to create reusable components 
*Note: you can mockup test data as well so you can simulate data without waiting for the backend module to be finished!*

### Expose the component for usage by other modules
Add the component in `src/index.tsx`
`export { Component } from './stories/Component'`

### Then on container app, you can import it as you normally would with external packages
```
// ./packages/container/pages/index.tsx

import { Component } from "package-name";
```

# Creating a new component package
1. Copy the starter-template and rename it to the package name you want.
`cp starter-template ./packages/{package-name}`

2. Edit the name property to the name same as the folder name for simplicity sake on `./packages/{package-name}/package.json`

3. Add the new component as a dependency to the container app, go to `./packages/container/package.json` as follows:
```
    "dependencies": {
        "@types/node": "18.11.10",
        "@types/react": "18.0.25",
        ...
        "package-name": "*"
        ...
    }
```

4. Go to project root and run `npx lerna bootstrap` to install dependencies on the newly created component package

5. Don't forget to add the declaration type on the **container** app.
```
    // ./packages/container/pages/{package-name}.d.ts
    declare module "package-name";
```

6. Rebuild the project again from the project root directory.
`npx lerna run build`