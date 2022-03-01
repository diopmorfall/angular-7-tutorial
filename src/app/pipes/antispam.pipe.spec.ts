import { AntispamPipe } from './antispam.pipe';

describe('AntispamPipe', () => {
  it('create an instance', () => {
    const pipe = new AntispamPipe();
    expect(pipe).toBeTruthy();
  });
});
