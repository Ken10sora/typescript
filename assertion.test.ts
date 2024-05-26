import { ciBuild, User } from "./assertion"

test('build state should be success', () => {
  expect(ciBuild).toHaveProperty('state', 'success')
})

test('actor should be Taka', () => {
  expect(ciBuild).toHaveProperty('actor.login', 'Taka')
})

test('triggered by the scheduled pipeline', () => {
  expect(ciBuild).toEqual(
    expect.objectContaining({
      triggerParameters: expect.objectContaining({ is_scheduled: true }),
      type: 'scheduled_pipeline',
    }),
  )
})

test('creates a new user with a 6-character password', () => {
  expect(new User({ name: 'hoge', password: '123456' })).toEqual({
    name: 'hoge',
    password: '123456',
  })
})

test('throw Error when the length of password is less than 6', () => {
  expect(() => new User({ name: 'hoge', password: '12345' })).toThrow()
  expect(() => new User({ name: 'hoge', password: '12345' })).toThrow(Error)
  expect(() => new User ({ name: 'hoge', password: '12345' })).toThrow('The password length must be at least 6 characters.',)
})

