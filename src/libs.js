'use strict'
console.log('[APP] load vendor.js ', process.env.NODE_ENV)
var COMMON_MODULES = {}

if (typeof window === 'object') {
  window.COMMON_MODULES = COMMON_MODULES
}

COMMON_MODULES['url'] = require('url')
COMMON_MODULES['classnames'] = require('classnames')
COMMON_MODULES['react'] = require('react')
COMMON_MODULES['react-addons-test-utils'] = require('react-addons-test-utils')
COMMON_MODULES['react-dom'] = require('react-dom')
COMMON_MODULES['react-redux'] = require('react-redux')
COMMON_MODULES['react-router'] = require('react-router')
COMMON_MODULES['redux'] = require('redux')
COMMON_MODULES['strip-ansi'] = require('strip-ansi')
COMMON_MODULES['react-dom/lib/ReactMount'] = require('react-dom/lib/ReactMount')
COMMON_MODULES['react-cookie'] = require('react-cookie')
COMMON_MODULES['react-intl'] = require('react-intl')
COMMON_MODULES['redux-actions'] = require('redux-actions')
COMMON_MODULES['redux-saga'] = require('redux-saga')

COMMON_MODULES.require = function (module) {
  if (COMMON_MODULES.hasOwnProperty(module)) {
    return COMMON_MODULES[module]
  }
  throw (new Error('Error module not find:' + module))
}

module.exports = COMMON_MODULES
