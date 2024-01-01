import { Component, Prop, State, h } from '@stencil/core';
import { WatchService } from '../../services/watch-service';

@Component({
  tag: 'fhirt-stop-watch-box',
  styleUrl: 'fhirt-stop-watch-box.css',
  shadow: true,
})
export class FhirtStopWatchBox {
  @Prop() updateInterval: number = 10;
  @State() hours = '00';
  @State() minutes = '00';
  @State() seconds = '00';
  @State() hundredthSeconds = '00';
  @State() isTimerRunning = false;
  timer: any = null;
  watchService = new WatchService();
  sanitizedUpdateInterval = Math.floor(this.updateInterval / 10) * 10;

  /**
   * @desc Starts the timer, updates every 10 milliseconds
   */
  start() {
    this.isTimerRunning = true;
    this.timer = setInterval(() => {
      this.watchService.advanceClock(this.sanitizedUpdateInterval);
      this.updateView();
    }, this.sanitizedUpdateInterval);
  }

  /**
   * @desc Updates the time for the watch component.
   * Applies the detected changes.
   */
  updateView() {
    this.hours = this.watchService.getHours();
    this.minutes = this.watchService.getMinutes();
    this.seconds = this.watchService.getSeconds();
    this.hundredthSeconds = this.watchService.getHundredthSeconds();
  }

  /**
   * @desc Stops the watch.
   */
  stop() {
    this.isTimerRunning = false;
    clearInterval(this.timer);
  }

  /**
   * @desc Clears the time of the watch.
   */
  clear() {
    this.watchService.clear();
    this.updateView();
  }

  render() {
    return (
      <div class="watch-box">
        <div class="watch-container">
          <fhirt-stop-watch hours={this.hours} minutes={this.minutes} seconds={this.seconds} hundredthSeconds={this.hundredthSeconds}></fhirt-stop-watch>
        </div>
        <div class="actions-container">
          <button onClick={() => this.start()} disabled={this.isTimerRunning}>Start</button>
          <button onClick={() => this.stop()} disabled={!this.isTimerRunning}>Stop</button>
          <button onClick={() => this.clear()} disabled={this.isTimerRunning}>Clear</button>
        </div>
      </div>
    );
  }
}
