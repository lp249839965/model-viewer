/*
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {TextureLoader} from 'three';

import Renderer from '../../three-components/Renderer.js';
import {equirectangularToCubemap} from '../../three-components/TextureUtils.js';
import {waitForEvent} from '../helpers.js';

const expect = chai.expect;

suite('TextureUtils', () => {
  suite('equirectangularToCubemap', () => {
    suite('with a valid renderer and texture', () => {
      let texture;
      let webGlRenderer;

      setup((done) => {
        const renderer = new Renderer();
        texture = new TextureLoader().load(
            './examples/assets/equirectangular.png', () => done());
        webGlRenderer = renderer.renderer;
      });

      test('creates a cubemap', () => {
        const cubemap = equirectangularToCubemap(webGlRenderer, texture);
        expect(cubemap).to.be.ok;
      });
    });
  });
});
