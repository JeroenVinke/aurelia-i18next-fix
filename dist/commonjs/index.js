'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

var _i18n = require('./i18n');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

Object.defineProperty(exports, 'I18N', {
  enumerable: true,
  get: function get() {
    return _i18n.I18N;
  }
});

var _relativeTime = require('./relativeTime');

Object.defineProperty(exports, 'RelativeTime', {
  enumerable: true,
  get: function get() {
    return _relativeTime.RelativeTime;
  }
});

var _df = require('./df');

Object.defineProperty(exports, 'DfValueConverter', {
  enumerable: true,
  get: function get() {
    return _df.DfValueConverter;
  }
});

var _nf = require('./nf');

Object.defineProperty(exports, 'NfValueConverter', {
  enumerable: true,
  get: function get() {
    return _nf.NfValueConverter;
  }
});

var _rt = require('./rt');

Object.defineProperty(exports, 'RtValueConverter', {
  enumerable: true,
  get: function get() {
    return _rt.RtValueConverter;
  }
});

var _t = require('./t');

Object.defineProperty(exports, 'TValueConverter', {
  enumerable: true,
  get: function get() {
    return _t.TValueConverter;
  }
});

function configure(config, cb) {
  if (cb === undefined || typeof cb !== 'function') {
    throw 'You need to provide a callback method to properly configure the library';
  }

  config.globalResources('./t');
  config.globalResources('./nf');
  config.globalResources('./df');
  config.globalResources('./rt');
  var instance = new _i18n.I18N(config.container.get(_aureliaEventAggregator.EventAggregator));
  config.container.registerInstance(_i18n.I18N, instance);

  return cb(instance);
}