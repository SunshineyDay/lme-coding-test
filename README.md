# Engineering Coding Challenge

![LME logo](src/images/London_Metal_Exchange_logo.svg)

## By Rob White ([rob@uuthree.com](mailto:rob@uuthree.com))

## Installation

Clone the repo...
```sh
git clone https://github.com/SunshineyDay/lme-coding-test.git
```

After cloning the repo install the application's dependencies...

```sh
npm install
```

To run the application...

```sh
npm start
```

This will spin up a browser pointing to [localhost:3000](http://localhost:3000)

## Usage

Load a robot instruction file via the home page.

You can find a sample file in the `\src\tests` folder. This file includes an instruction set that contains an 'S' instruction
that is invalid when you first run the application (only L/F/R initially available). Invalid instruction sets are not processed - they are highlighted in amber in the results page. Add the S instruction (S, Spin, 180, 0) via the instruction types page and reload the file to see that the new
instruction type is implemented.

The file will be processed and then you are redirected to the results page.

The application starts with the three basic instruction types: L (rotate anti-clockwise), R (rotate clockwise), and F (move forward).

Further instruction types can be added via the Instruction Types page. Enter a single letter command, description, degrees of rotation, and number of grid points to move.

Added instruction types can be deleted using the grid icon. Note that only newly added instruction types can be deleted - the base instruction types L/F/R cannot be removed.

## Technical Overview

The project uses the following libraries:

Library|Usage
-------|-----
|[ag-grid](https://www.ag-grid.com/)|Displays the supported instruction types in the instruction types editor page|
|[Bootstrap](https://getbootstrap.com/)|Layout|
|[Formik](https://formik.org/)|Form management in the instruction types editor page|
|[Jest](https://jestjs.io/)|Testing the services|
|[reactstrap](https://reactstrap.github.io#readme)|Bootstrap components for React|
|[Yup](https://github.com/jquense/yup#readme)|Validation schema definition in the instruction types editor page|

Application state is managed using React's Context API.

Instruction types are persisted between sessions by saving to local storage.
