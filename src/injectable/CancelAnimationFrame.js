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
var thisCancelAnimationFrame;
if (typeof global == 'object') {
  thisCancelAnimationFrame = global.cancelAnimationFrame
} else if (typeof window == 'object') {
  thisCancelAnimationFrame = window.cancelAnimationFrame
}
var CancelAnimationFrame = {
  current: id => thisCancelAnimationFrame(id),
  inject(injected) {
    CancelAnimationFrame.current = injected;
  },
};

module.exports = CancelAnimationFrame;
