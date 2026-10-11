import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting message', () => {
    expect(greet('World')).toContain('Hello, World!');
  });
});
