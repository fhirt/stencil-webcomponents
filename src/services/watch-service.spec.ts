import { WatchService } from "./watch-service";

let watchService = new WatchService();
const hours = 60 * 60 * 100;
const minutes = 60 * 100;
const seconds = 100;
const hundredths = 1;

beforeEach(() => {
    // reset internal clock
    watchService.clear();
    expect(watchService.getHundredthSeconds()).toBe("00");
    expect(watchService.getSeconds()).toBe("00");
    expect(watchService.getMinutes()).toBe("00");
    expect(watchService.getHours()).toBe("00");
})

describe('timer', () => {
    it('should advance hundredths of seconds', () => {
        watchService.advanceClockBy(10 * hundredths);
        expect(watchService.getHundredthSeconds()).toBe("10");
        expect(watchService.getSeconds()).toBe("00");
        expect(watchService.getMinutes()).toBe("00");
        expect(watchService.getHours()).toBe("00");
    })

    it('should advance seconds', () => {
        let stoppedTime = 3 * seconds + 55 * hundredths;
        watchService.advanceClockBy(stoppedTime);
        expect(watchService.getHundredthSeconds()).toBe("55");
        expect(watchService.getSeconds()).toBe("03");
        expect(watchService.getMinutes()).toBe("00");
        expect(watchService.getHours()).toBe("00");
    })

    it('should advance minutes', () => {
        let stoppedTime = 3 * minutes + 19 * seconds + 99 * hundredths;
        watchService.advanceClockBy(stoppedTime);
        expect(watchService.getHundredthSeconds()).toBe("99");
        expect(watchService.getSeconds()).toBe("19");
        expect(watchService.getMinutes()).toBe("03");
        expect(watchService.getHours()).toBe("00");
    })

    it('should advance hours', () => {
        let stoppedTime = 12 * hours + 11 * minutes + 20 * seconds + 37 * hundredths;
        watchService.advanceClockBy(stoppedTime);
        expect(watchService.getHundredthSeconds()).toBe("37");
        expect(watchService.getSeconds()).toBe("20");
        expect(watchService.getMinutes()).toBe("11");
        expect(watchService.getHours()).toBe("12");
    })

    it('should capture long time', () => {
        let stoppedTime = 1234 * hours;
        watchService.advanceClockBy(stoppedTime);
        expect(watchService.getHundredthSeconds()).toBe("00");
        expect(watchService.getSeconds()).toBe("00");
        expect(watchService.getMinutes()).toBe("00");
        expect(watchService.getHours()).toBe("1234");
    })

    it('should reset internal clock', () => {
        watchService.advanceClockBy(77 * minutes);
        expect(watchService.getMinutes()).toBe("17");
        expect(watchService.getHours()).toBe("01");
        watchService.clear();
        expect(watchService.getHundredthSeconds()).toBe("00");
        expect(watchService.getSeconds()).toBe("00");
        expect(watchService.getMinutes()).toBe("00");
        expect(watchService.getHours()).toBe("00");
    })
})