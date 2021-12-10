/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

import type { LayoutProComponent } from '@idux/pro/layout'

declare module 'vue' {
  export interface GlobalComponents {
    LayoutProComponent: LayoutProComponent
  }
}

export {}
