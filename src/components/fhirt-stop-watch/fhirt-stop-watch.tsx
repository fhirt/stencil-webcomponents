import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'fhirt-stop-watch',
  styleUrl: 'fhirt-stop-watch.css',
  shadow: true,
})
export class FhirtStopWatch {
  @Prop() hours: string;
  @Prop() minutes: string;
  @Prop() seconds: string;
  @Prop() hundredthSeconds: string;

  render() {
    return (
      <div class="watch-wrapper">
        <div class="watch">
          <div class="unit">{this.hours}</div>
          <div class="sep"> : </div>
          <div class="unit">{this.minutes}</div>
          <div class="sep"> : </div>
          <div class="unit">{this.seconds}</div>
          <div class="sep"> : </div>
          <div class="unit">{this.hundredthSeconds}</div>
        </div>
      </div>
    );
  }
}
