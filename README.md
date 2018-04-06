# corsair-sdk

> This is a fork of [`cue-sdk-node2`](https://gitlab.com/luxdvie/node-cue-sdk-2), with support for NodeJS 9.0

`corsair-sdk` enables you to interact with the Corsair CUE SDK in NodeJS

## [Documentation](https://github.com/Yannicked/node-cue-sdk/wiki/Documentation)

---

### Asynchonous

```ts
import CueSDK from 'corsair-sdk'
const cue = new CueSDK()

cue.set('A', 255, 255, 0, function() {
  console.log('Lights set!')
})

setTimeout(() => {
  cue.set([['A', 255, 0, 0], ['S', 0, 255, 0], ['D', 0, 0, 255]], function() {
    console.log('Three lights set!')
  })
}, 3000)
```

---

### Synchonous

```ts
import CueSDK from 'corsair-sdk'
const cue = new CueSDK()

cue.set('W', 255, 255, 255) // Set the W key to #FFFFFF aka white

// You can set multiple colors at the time!
cue.set([['A', 255, 0, 0], ['S', 0, 255, 0], ['D', 0, 0, 255]])

// Special keys/lights are also supported!
cue.set('Logo', 255, 255, 0)

// To turn off all leds
cue.clear()
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
