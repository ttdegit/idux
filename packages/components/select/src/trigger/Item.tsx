/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

import type { FunctionalComponent } from 'vue'

import { IxIcon } from '@idux/components/icon'

interface ItemProps {
  disabled?: boolean
  prefixCls: string
  removable: boolean
  value: any
  handleItemRemove: (value: any) => void
}

const Item: FunctionalComponent<ItemProps> = (props, { slots }) => {
  const { disabled, prefixCls, removable, value, handleItemRemove } = props

  const classes = prefixCls + (disabled ? ` ${prefixCls}-disabled` : '')

  const handleClick = (evt: Event) => {
    evt.stopPropagation()
    handleItemRemove(value)
  }

  return (
    <div class={classes}>
      <span class={`${prefixCls}-label`}>{slots.default!()}</span>
      {!disabled && removable && (
        <span class={`${prefixCls}-remove`} onClick={handleClick}>
          <IxIcon name="close" />
        </span>
      )}
    </div>
  )
}

export default Item
