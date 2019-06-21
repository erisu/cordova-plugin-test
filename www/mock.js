/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

const exec = cordova.require('cordova/exec');

class Mock {
    /**
     * Does Something
     *
     * @param {Function} successCallback
     * @param {Function} errorCallback
     * @param config
     */
    mock (successCallback, errorCallback, config) {
        if (config instanceof Array) {
            // do nothing
        } else {
            if (typeof (config) === 'object') {
                if (config.formats) config.formats = config.formats.replace(/\s+/g, '');
                config = [ config ];
            } else {
                config = [];
            }
        }

        if (errorCallback === null) {
            errorCallback = function () {};
        }

        if (typeof errorCallback !== 'function') {
            console.log('BarcodeScanner.scan failure: failure parameter not a function');
            return;
        }

        if (typeof successCallback !== 'function') {
            console.log('BarcodeScanner.scan failure: success callback parameter must be a function');
            return;
        }

        exec(successCallback, errorCallback, 'Mock', 'mock', config);
    }
}

module.exports = new Mock();
