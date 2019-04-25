"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../src/main");
describe('Main function: process', () => {
    // Assert if setTimeout was called properly
    it('works with DASH', () => {
        expect(main_1.process(main_1.CaseList.DASH, 'One', 'Two', 'Three')).toBe(`one-two-three`);
    });
    it('works with CAMEL', () => {
        expect(main_1.process(main_1.CaseList.CAMEL, 'One', 'Two', 'Three')).toBe(`OneTwoThree`);
    });
    it('returns empty string if invalid CaseList', () => {
        expect(main_1.process(undefined, 'One', 'Two', 'Three')).toBe('');
    });
});
