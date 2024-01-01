import { newE2EPage } from '@stencil/core/testing';

describe('fhirt-stop-watch-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fhirt-stop-watch-box></fhirt-stop-watch-box>');

    const element = await page.find('fhirt-stop-watch-box');
    expect(element).toHaveClass('hydrated');
  });
});
