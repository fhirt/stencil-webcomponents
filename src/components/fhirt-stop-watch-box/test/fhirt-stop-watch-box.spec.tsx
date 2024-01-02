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
          <div class="watch-box">
            <div class="watch-container">
              <fhirt-stop-watch hours="00" hundredthSeconds="00" minutes="00" seconds="00"></fhirt-stop-watch>
            </div>
            <div class="actions-container">
              <button>
                Start
              </button>
              <button disabled="">
                Stop
              </button>
              <button>
                Clear
              </button>
            </div>
          </div>
        </mock:shadow-root>
      </fhirt-stop-watch-box>
    `);
  });
});
