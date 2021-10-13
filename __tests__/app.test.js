const { getScore, fetchSomeData } = require('../app')

// it(message,function) message คือตั้งชื่อว่าเราจะเทสอะไร function คือเราจะเทสอะไร
// จะใช้ it หรือ test ก็ได้
/* test('should get A', () => {
  const resultOfFunction = getScore()
  expect(resultOfFunction).toEqual('A') // บรรทัดนี้เราจะเรียก toEqual ว่า matchers โดยใช้คู่กับ expect
}) */

test("Should get A", () => {
  expect(getScore(50)).toEqual('A')
  expect(getScore(52)).toEqual('A')
})

test("Should get F", () => {
  expect(getScore(20)).toEqual("F")
  expect(getScore(49)).toEqual("F")
})

test("Should work with fetch", async () => {
  await expect(fetchSomeData()).not.toBeNull();
})

