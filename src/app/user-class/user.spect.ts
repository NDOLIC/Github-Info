import { User } from './user';
import { DatePipe } from '@angular/common';
import { DateCountPipe } from '../date-count.pipe';

describe('Data', () => {
  it('should create an instance', () => {
    expect(new User( "",0, 0, 0,"","",new Date()));
  });
});
