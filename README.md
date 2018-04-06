# corsair-sdk

`corsair-sdk` enables you to interact with the Corsair CUE SDK, in NodeJS.

> This is a fork of [`cue-sdk-node2`](https://gitlab.com/luxdvie/node-cue-sdk-2), with support for NodeJS 9.0

## [Documentation](https://github.com/Yannicked/node-cue-sdk/wiki/Documentation)

### Synchonous

```ts
import CueSDK from 'corsair-sdk'
const cue = new CueSDK()

// Set single color
cue.set('W', 255, 255, 255)

// You can set multiple colors at the time!
cue.set([['A', 255, 0, 0], ['S', 0, 255, 0], ['D', 0, 0, 255]])

// Special keys/lights are also supported!
cue.set('Logo', 255, 255, 0)

// To turn off all leds
cue.clear()
```

---

### Asynchonous

```ts
import CueSDK from 'corsair-sdk'
const cue = new CueSDK()

// Set single color
cue.set('A', 255, 255, 0, () => {
  console.log('Lights set!')
})

// Set multiple colors
cue.set([['A', 255, 0, 0], ['S', 0, 255, 0], ['D', 0, 0, 255]], () => {
  console.log('Three lights set!')
})
```

## Requirements

* Windows (Linux and Mac OSX are currently not supported by the CueSDK)
* Node.js `5.0.0` or higher

## Installation

Make sure you've installed all the [necessary build
tools](https://github.com/TooTallNate/node-gyp#installation),
then run this command in the source directory:

```bash
$ npm install corsair-sdk
```
