# React Material

![Logo](./public/react-material.png)

![Coverage](./badges.svg)

React Material is a component library that is built based on the principles of the Material 3 design system.

> This isn't the official release, just beta release to validate the development while the documentation is writing.

## Quick setup

### First - Install

```console
npm i react-material
```

### Second - styling

Import the required stylesheet into `RootLayout` or your `(main|index).ts`:

```js
import 'react-material/dist/react-material.css';
```

To make use of `MaterialSymbol` component, it is necessary to import the icon font stylesheet too, according to the style chosen:

```js
// Outlined
import 'react-material/dist/react-material-symbols-outlined.css';
// Rounded
import 'react-material/dist/react-material-symbols-rounded.css';
// Sharp
import 'react-material/dist/react-material-symbols-sharp.css';
```

### Third - Theming

For correct use of the components and to customize the interface, it is necessary to fill some CSS variables. You have some utils to do this task.

You just need to pass the main color of your interface, the color scheme (“light” or “dark”) and the font face names and the util will make the job.

> More info about theme utils in the Utils section of this page.

For each necessity, a specific util is applied:

#### With Next.js

In this case, the right way is to set these vars on server side, with the `Rootlayout`:

```jsx
import { applyThemeOnHtmlStyleTag } from 'react-material/utils';
...

return (
  <html
    style={applyThemeOnHtmlStyleTag({
      seedColor: '#4285F4', // main color as hex
      colorScheme: 'dark', // the recommendation is to use a cookie value
      font: { // if you prefer to make use of Next.js font variable, just set `false` here
        title: '"Roboto"', // or set the `--font-title` var
        content: '"Roboto"', // or set the `--font-content` var
        code: '"Roboto Mono"', // or set the `--font-code` var
      },
    })}
  >
    <body>{children}</body>
  </html>
);
```

#### With client

In this case, call the `applyTheme` util into `(main|index).tsx`:

```jsx
import { applyTheme } from 'react-material/utils';
// before createRoot
applyTheme({
  seedColor: '#4285F4',
  colorScheme: 'light',
  font: {
    title: '"Roboto"',
    content: '"Roboto"',
    code: '"Roboto Mono"',
  },
});
```

Setup done! Just start to make use.

## Components

This list is organized according to [Material Docs](https://m3.material.io/components).

- Actions
  - [x] ~~Button~~
  - [x] ~~IconButton~~
  - [ ] FloatActionButton (__coming soon__)
  - [ ] _SegmentedButton (planning)_
- Communication
  - [ ] Snackbar (__coming soon__)
  - [ ] Tooltip (__partially available with IconButton__)
  - [ ] _Badges (planning)_
  - [ ] _Pregress (planning)_
  - [ ] _RichTooltip (planning)_
- Containment
  - [x] ~~Divider~~
  - [ ] Card (__coming soon__)
  - [ ] Dialog (__coming soon__)
  - [ ] List (__coming soon__)
  - [ ] SideSheet (__coming soon__)
  - [ ] BottomSheet (__coming soon__)
  - [ ] _Carousel (planning)_
- Navigation
  - [x] ~~Appbar~~
  - [x] ~~Navbar~~
  - [x] ~~Navdrawer~~
  - [x] ~~Navrail~~
  - [ ] Tabs (__coming soon__)
- Selection
  - [ ] Checkbox (__coming soon__)
  - [ ] Chip (__coming soon__)
  - [ ] Menu (__coming soon__)
  - [ ] RadioButton (__coming soon__)
  - [ ] Switch (__coming soon__)
  - [ ] _DatePicker (planning)_
  - [ ] _Slider (planning)_
  - [ ] _TimePicker (planning)_
- Form
  - [ ] Search (__coming soon__)
  - [ ] SelectField (__coming soon__)
  - [ ] TextField (__coming soon__)
- Layout
  - [x] ~~Grid~~
  - [x] ~~Flexbox~~
