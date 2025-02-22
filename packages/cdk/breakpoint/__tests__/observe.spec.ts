import { BREAKPOINTS } from '../src/breakpoints'
import { isMatched } from '../src/observe'

describe('observe.ts', () => {
  test('isMatched work', () => {
    expect(isMatched(BREAKPOINTS.lg)).toBeFalsy()
    expect(isMatched('all')).toBeTruthy()
    expect(isMatched([BREAKPOINTS.lg, 'all'])).toBeTruthy()
  })
})
