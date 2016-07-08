```javascript
var overlap = require('semver-ranges-overlap')
var assert = require('assert')

overlap('>=1.0.0', '>=2.0.0')
overlap('>=1.0.0', '<1.0.0')
overlap('1.x', '2.x')

assert.strictEqual(overlap('>=1.0.0', '>=2.0.0'), true)
assert.strictEqual(overlap('>=1.0.0', '<1.0.0'), false)

assert.throws(
  function () { overlap('x', 'y') },
  'invalid semver range'
)

assert.strictEqual(overlap('>=1.0.0', '<1.0.0'), false)

assert.strictEqual(overlap('>=1.0.0', '<1.0.0'), false)
```
