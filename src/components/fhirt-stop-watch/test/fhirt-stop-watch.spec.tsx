import { newSpecPage } from '@stencil/core/testing';
import { FhirtStopWatch } from '../fhirt-stop-watch';

describe('fhirt-stop-watch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FhirtStopWatch],
      html: `<fhirt-stop-watch></fhirt-stop-watch>`,
    });
    expect(page.root).toEqualHtml(`
      <fhirt-stop-watch>
        <mock:shadow-root>
          <div class="watch-wrapper">
            <div class="watch">
              <div class="unit"></div>
              <div class="sep"> : </div>
              <div class="unit"></div>
              <div class="sep"> : </div>
              <div class="unit"></div>
              <div class="sep"> : </div>
              <div class="unit"></div>
            </div>
          </div>
        </mock:shadow-root>
      </fhirt-stop-watch>
    `);
  });
});
