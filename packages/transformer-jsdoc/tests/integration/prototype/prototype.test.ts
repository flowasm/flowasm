import path from 'path';
import { testRunner } from '../../helpers/fileTestRunner';

describe('integration: prototype', () => {
  it('transforms the prototype example to TypeScript', async () => {
    const testDir = path.join(__dirname, '__fixtures__');
    const { expected, results } = await testRunner(testDir);
    expect(results.content).toEqual(expected);
  });
});
