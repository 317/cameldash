import { process, CaseList } from '../src/main';

describe('Main function: process', () => {
  // Assert if setTimeout was called properly
  it('works with DASH', () => {
    expect(process(CaseList.DASH, 'One', 'Two', 'Three')).toBe(`one-two-three`);
  });

  it('works with CAMEL', () => {
    expect(process(CaseList.CAMEL, 'One', 'Two', 'Three')).toBe(`OneTwoThree`);
  });

  it('returns empty string if invalid CaseList', () => {
    expect(process(undefined, 'One', 'Two', 'Three')).toBe('');
  });
});
