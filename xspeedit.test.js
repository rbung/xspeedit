const xspeedit = require('./xspeedit')

test('should return empty if no article', () => {
  const ship = xspeedit.ship('')

  expect(ship).toBe('')
})

test('should return 1 box if 1 article', () => {
  const ship = xspeedit.ship('3')

  expect(ship).toBe('3')
})

test('should return 1 box if 2 articles lower than 10', () => {
  const ship = xspeedit.ship('34')

  expect(ship).toBe('43')
})

test('should return 2 box if 2 articles superior than 10', () => {
  const ship = xspeedit.ship('94')

  expect(ship).toBe('9/4')
})

test('should return boxes with articles', () => {
  const ship = xspeedit.ship('163841689525773')

  expect(ship).toBe('91/82/81/73/73/64/6/55')
})

test('should return 1 box with 10 articles of 1', () => {
  const ship = xspeedit.ship('1111111111')

  expect(ship).toBe('1111111111')
})

test('should throw error given not only digits', () => {
  expect(() => {
    xspeedit.ship('123oops34')
  }).toThrow('Oops, something is wrong with your articles')
})
