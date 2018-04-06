import CueSDK from '../src'
const cue = new CueSDK()

cue.set('A', 255, 255, 0, function() {
  console.log('Lights set!')
})

setTimeout(() => {
  cue.set([['A', 255, 0, 0], ['S', 0, 255, 0], ['D', 0, 0, 255]], function() {
    console.log('Three lights set!')
  })
  setTimeout(() => {}, 5000)
}, 3000)
