# convertHR - Convert number to Croatian words

Convert a float number to Croatian words.  
Useful when in need to show a Money amount in words like i.e:

> **Iznos:** *121024.05*   
> **Slovima:** *stodvadesetjednatisućadvadesetčetiri kune i pet lipa*

Supported: modern browsers. (To support IE use [Babel](https://babeljs.io/));  

```js
convertHR(number [, {options}])
```

where *"number"* is a float number up to [Number.isSafeInteger()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger), the Croatian representation of that value will be returned, otherwise a String `"Error"` will be returned

## Options

Option | Type | Default value | Description
--- | --- | --- | ---
delimiter | String | `""` | Use `" "` to delimit words with space
simple | Boolean | `false` | Set to true to remove unnecessary *"jedan/na"* for round *thousands* numbers


## Import

```js
import {convertHR} from "./convert-hr.js";
```

## Usage

```js
const words = convertHR(1042.31);
```

> jednatisućačetrdesetdvije kune i tridesetjedna lipa

```js
const words = convertHR(1042.31, {simple: true});
```

> tisućučetrdesetdvije kune i tridesetjedna lipa

```js
const words = convertHR(1042.31, {simple: true, delimiter: " "});
```

> tisuću četrdeset dvije kune i trideset jedna lipa

 

## Test

To create a readable `test.txt` file with your test results from `test.js`  

```sh
$ node --experimental-modules test.js > test.txt
```

## Licence:

MIT