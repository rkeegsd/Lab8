/**
 * @jest-environment jsdom
 */

import {pushToHistory} from '../scripts/router.js'

describe('pushToHistory() Test', () => {
  test('push settings', () => {
    let retVal = pushToHistory('settings', -1);
    expect(retVal.state.page).toBe('settings');
    expect(retVal.length).toBe(2);
  });

  test('push entry', () => {
    const entryNum = 5;
    let retVal = pushToHistory('entry', entryNum);
    expect(retVal.state.page).toBe('entry' + entryNum);
    expect(retVal.length).toBe(3);
  });

  test('push invalidPage (default)', () => {
    let retVal = pushToHistory('notAValidPage', -234);
    expect(retVal.state).toStrictEqual({});
    expect(retVal.length).toBe(4);
  });
});