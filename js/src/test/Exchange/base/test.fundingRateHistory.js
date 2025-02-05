// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code
// EDIT THE CORRESPONDENT .ts FILE INSTEAD

import testSharedMethods from './test.sharedMethods.js';
function testFundingRateHistory(exchange, method, entry, symbol) {
    const format = {
        'info': {},
        'symbol': 'BTC/USDT:USDT',
        'timestamp': 1638230400000,
        'datetime': '2021-11-30T00:00:00.000Z',
        'fundingRate': exchange.parseNumber('0.0006'),
    };
    const emptyNotAllowedFor = ['symbol', 'timestamp', 'fundingRate'];
    testSharedMethods.assertStructure(exchange, method, entry, format, emptyNotAllowedFor);
    testSharedMethods.assertSymbol(exchange, method, entry, 'symbol', symbol);
    testSharedMethods.assertTimestamp(exchange, method, entry);
}
export default testFundingRateHistory;
