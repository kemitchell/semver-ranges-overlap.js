var semver = require('semver')

module.exports = function (a, b) {
  if (!semver.validRange(a)) throw new Error('invalid semver range')
  if (!semver.validRange(b)) throw new Error('invalid semver range')
  var aParsed = parse(a)
  var bParsed = parse(b)
  console.log(JSON.stringify(aParsed, null, 2))
  console.log(JSON.stringify(bParsed, null, 2))
}

function parse (range) {
  if (!semver.validRange(range)) return false
  else return new semver.Range(range).set
}
