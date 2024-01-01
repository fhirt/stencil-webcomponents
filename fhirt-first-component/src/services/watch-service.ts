export class WatchService {
    private hh = 0;
    private mm = 0;
    private ss = 0;
    private hs = 0;


    /**
     * @desc Calculates the units and sets in string format.
     * @param unit value of the unit in numbers
     * @return {string} the string representation of the unit's value with at least 2 digits
    */
    getTimeString(unit: number): string {
        if (!unit) {
            return "00";
        }

        if (unit < 10) {
            return "0" + unit;
        }

        return unit.toString();
    }

    clear() {
        this.hh = 0;
        this.mm = 0;
        this.ss = 0;
        this.hs = 0;
    }

    getHours(): string {
        return this.getTimeString(this.hh);
    }

    getMinutes(): string {
        return this.getTimeString(this.mm);
    }

    getSeconds(): string {
        return this.getTimeString(this.ss);
    }

    getHundredthSeconds(): string {
        return this.getTimeString(this.hs);
    }

    /**
   * @desc Updates the value of the units in for the watch
   */
    advanceClock(updateInterval: number) {
        this.hs += (updateInterval / 10);
        if (this.hs >= 100) {
            this.hs = this.hs - 100;
            this.ss++;
            if (this.ss >= 60) {
                this.ss = 0;
                this.mm++;
                if (this.mm >= 60) {
                    this.mm = 0;
                    this.hh++;
                }
            }
        }
    }

}