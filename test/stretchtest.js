// Written by Namugarura Syda and Waako Conrad
const assert = require('chai');
import {taxcalculator} from '../stretchtest.js';

describe('taxcalculator', () => {
    it('less than 12000 means no tax', () => {
        assert.equal(taxcalculator(10000), 0)
    });

    it('between 12000 to 36000', () => {
        assert.equal(taxcalculator(25000), 5000)
    });

    it('more than 36000', () => {
        assert.equal(taxcalculator(50000), 20000)
    });
});
