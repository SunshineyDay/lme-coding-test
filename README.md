![](src/images/London_Metal_Exchange_logo.svg)

# Engineering Coding Challenge

## By Rob White ([rob@uuthree.com](mailto:rob@uuthree.com))

## Installation

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

Load a robot instruction file via the home page. You can find a sample file in the `\src\tests` folder.

The file will be processed and then you are redirected to the results page.

The application starts with the three basic instruction types: L (rotate anti-clockwise), R (rotate clockwise), and F (move forward).

Further instruction types can be added via the Instruction Types page. Enter a single letter command, description, degrees of rotation, and number of grid points to move.