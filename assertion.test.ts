import { ciBuild } from "./assertion"

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

