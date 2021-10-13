const fetch = require('cross-fetch');
const gradeCal = (score) => {
  if (score < 50) {
    return "F"
  }
  return "A"
}

const asyncTest = async () => {
  const result = await fetch("https://api.github.com/users/taninchot0919")
  const data = await result.json()
  return data
}
exports.getScore = gradeCal
exports.fetchSomeData = asyncTest