var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../../app/widgets/Measurement/Measurement"], function (require, exports, Measurement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Measurement_1 = __importDefault(Measurement_1);
    describe("Measurement", function () {
        it('MyFirstTest', function () {
            var ff = new Measurement_1.default();
            //expect(true).toBeTruthy("What? was true not truth");
        });
    });
});
//# sourceMappingURL=MeasurementSpec.js.map