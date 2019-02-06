import { User } from './user';

describe('Data', () => {
  it('should create an instance', () => {
    expect(new User("", "", 0, 0, 0,"","")).toBeTruthy();
  });
});
