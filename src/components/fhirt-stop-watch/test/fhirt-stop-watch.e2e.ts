import { newE2EPage } from '@stencil/core/testing';

describe('fhirt-stop-watch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fhirt-stop-watch></fhirt-stop-watch>');

    const element = await page.find('fhirt-stop-watch');
    expect(element).toHaveClass('hydrated');
  });
});
