# atomic-aese

Namespace-aware easing functions.


## Usage

Source code:

```js
import { ease } from "atomic-ease";

const result = ease.In.expo(0.5);
```

After bundling with [Rollup](https://rollupjs.org/):

```js
const easeInExpo = (x) => (x ? Math.pow(2, 10 * (x - 1)) : 0);

const result = easeInExpo(0.5);
```


## Implemented easing types

- linear
- quad
- cubic
- quart
- expo
- back

...to be added more.


## Create new easing functions

```js
import { createEase } from "atomic-ease";
```

- `createEase.from()`
- `createEase.concatenate()`
- `createEase.integrate()`

See type declaration for details.

Not yet very well tested.
