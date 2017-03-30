/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */
'use strict';
var thisRequestAnimationFrame;
if (typeof global == 'object') {
  thisRequestAnimationFrame = global.requestAnimationFrame
} else if (typeof window == 'object') {
  thisRequestAnimationFrame = window.requestAnimationFrame
}
var RequestAnimationFrame = {
  current: cb => thisRequestAnimationFrame(cb),
  inject(injected) {
    RequestAnimationFrame.current = injected;
  },
};

module.exports = RequestAnimationFrame;
