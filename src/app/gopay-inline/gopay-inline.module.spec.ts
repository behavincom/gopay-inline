import { GopayInlineModule } from './gopay-inline.module';

describe('GopayInlineModule', () => {
  let gopayInlineModule: GopayInlineModule;

  beforeEach(() => {
    gopayInlineModule = new GopayInlineModule();
  });

  it('should create an instance', () => {
    expect(gopayInlineModule).toBeTruthy();
  });
});
