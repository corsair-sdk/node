import CueSDK from '../src'
const cue = new CueSDK()

cue.set('W', 255, 255, 255)

// You can set multiple colors at the time!
cue.set([['A', 255, 0, 0], ['S', 0, 255, 0], ['D', 0, 0, 255]])

// Special keys/lights are also supported!
cue.set('Logo', 255, 255, 0)

// To turn off all leds
cue.clear()

setTimeout(() => {}, 5000)
