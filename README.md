![Perx Health](https://user-images.githubusercontent.com/4101096/163123610-9dfa9263-1518-4f5d-8839-9ddc142a513e.png)

[![Build Status](https://github.com/perxhealth/react-ui/actions/workflows/publish.yml/badge.svg)](https://github.com/perxhealth/react-ui/actions/workflows/publish.yml) [![Build Status](https://github.com/perxhealth/react-ui/actions/workflows/main.yml/badge.svg)](https://github.com/perxhealth/react-ui/actions/workflows/main.yml)

Perx Health's standard React user interface component library, helping us bring
behavioral science for better health to users across our platform, powered by
:sparkles: [Chakra UI](https://chakra-ui.com/) :sparkles:

## About the project

We are on a mission to bring our proven chronic condition management program to
everyone. We have heavily invested in [React](https://reactjs.org/) to build our
user interfaces to help accomplish this.

We ship multiple interfaces to multiple types of consumers every day, and we
want to standardise the components of which those interfaces are comprised.

This is important for two primary reasons.

1. Speeding up development by reducing duplication.
2. Developing a familiar and comfortable visual experience across our platform.

This library stands on the shoulders of [Chakra UI](https://chakra-ui.com) and
as such all accessibility and speed advantages also apply here. As such, Chakra
UI must also be installed.

## Usage & Examples

Visit our [Storybook](https://perxhealth.github.io/react-ui) to see a list of
available components along with examples and instructions for use.

## Installation

Install the package from the npm registry, using `npm`, `yarn` or `pnpm`.

### npm

If you're using npm

```bash
$ npm install @perxhealth/react-ui
```

### yarn

If you're using Yarn

```
$ yarn install @perxhealth/react-ui
```

### PNPM

If you're using pnpm, like us!

```
$ pnpm install @perxhealth/react-ui
```

### Chakra UI

The only required peer dependency of [Perx React UI](https://github.com/perxhealth.com/react-ui) is [Chakra UI](https://chakra-ui.com/) and its immediate dependencies.

```bash
$ pnpm add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
```

## Setup

Now that you've installed the package, you'll need to wrap your application
in a `ChakraProvider` and pass in Perx's theme.

```tsx
import { ChakraProvider } from "@chakra-ui/react"
import { extendedTheme } from "@perxhealth/react-ui"

export const App = () => {
  return (
    <ChakraProvider theme={extendedTheme}>
      <YourApp />
    </ChakraProvider>
  )
}
```

Now, you can use any of the components provided by `@perxhealth/react-ui` in
your component tree

## Development

Thinking of contributing? Fantastic! Follow the below steps in sequence to get
up and running with a local development copy.

### Clone the repository

```bash
$ git clone git@github.com:perxhealth/react-ui.git
$ cd react-ui
```

### Setup system dependencies

We provide a `.tool-versions` dotfile indicating which version of Node
and PNPM should be in use. There are various version managers which support this
format, however in this case we recommend using [asdf](https://github.com/asdf-vm/asdf).

Once you have asdf installed, ensure you also have its `nodejs` and `pnpm`
plugins installed.

```bash
$ asdf plugin add nodejs
$ asdf plugin add pnpm
```

Once you have the plugins installed, you can instruct `asdf` to download
and install the correct versions with a single command.

```bash
$ asdf install
```

### Install app dependencies

As you may have guessed, the next step is to install node dependencies with PNPM
using the following command.

```bash
$ pnpm install
```

## Testing

Ensure you write tests to cover any code or behaviour you introduce. Tests are
run via Jest and can be invoked with the following command.

```bash
$ pnpm test
```

You can pass arguments to the underlying Jest invocation using double-dash
syntax. For example, the below will tell Jest to start in watch mode instead of
running the entire suite and exiting.

```
$ pnpm test -- --watchAll
```
