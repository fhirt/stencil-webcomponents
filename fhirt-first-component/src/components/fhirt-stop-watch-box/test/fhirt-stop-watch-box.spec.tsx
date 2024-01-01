import { newSpecPage } from '@stencil/core/testing';
import { FhirtStopWatchBox } from '../fhirt-stop-watch-box';

describe('fhirt-stop-watch-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FhirtStopWatchBox],
      html: `<fhirt-stop-watch-box></fhirt-stop-watch-box>`,
    });
    expect(page.root).toEqualHtml(`
      <fhirt-stop-watch-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fhirt-stop-watch-box>
    `);
  });
});
