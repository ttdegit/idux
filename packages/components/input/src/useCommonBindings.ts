/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

import type { CommonProps } from './types'
import type { FormAccessor } from '@idux/cdk/forms'
import type { InputConfig, TextareaConfig } from '@idux/components/config'
import type { ComputedRef, Ref } from 'vue'

import { computed, nextTick, onMounted, ref, toRaw, watch } from 'vue'

import { useValueAccessor } from '@idux/cdk/forms'
import { callEmit } from '@idux/cdk/utils'
import { useFormItemRegister } from '@idux/components/form'
import { useFormElement } from '@idux/components/utils'

export interface CommonBindings<T extends HTMLInputElement | HTMLTextAreaElement> {
  elementRef: Ref<T | undefined>
  accessor: FormAccessor

  isDisabled: ComputedRef<boolean>
  clearIcon: ComputedRef<string>
  clearHidden: ComputedRef<boolean>
  isClearable: ComputedRef<boolean>
  isFocused: Ref<boolean>

  focus: (options?: FocusOptions) => void
  blur: () => void

  handlerInput: (evt: Event) => void
  handlerCompositionStart: (evt: CompositionEvent) => void
  handlerCompositionEnd: (evt: CompositionEvent) => void
  handlerFocus: (evt: FocusEvent) => void
  handlerBlur: (evt: FocusEvent) => void
  handlerClear: (evt: MouseEvent) => void
}

export function useCommonBindings(
  props: CommonProps,
  config: InputConfig | TextareaConfig,
): CommonBindings<HTMLInputElement | HTMLTextAreaElement> {
  const { elementRef, focus, blur } = useFormElement<HTMLInputElement | HTMLTextAreaElement>()
  const { accessor, control } = useValueAccessor()
  useFormItemRegister(control)

  const syncValue = () => {
    const element = elementRef.value
    const value = accessor.valueRef.value ?? ''
    if (element && element.value !== value) {
      element.value = value
    }
  }

  watch(accessor.valueRef, () => syncValue())

  onMounted(() => syncValue())

  const isDisabled = computed(() => accessor.disabled.value)
  const isClearable = computed(() => props.clearable ?? config.clearable)
  const clearIcon = computed(() => props.clearIcon ?? config.clearIcon)
  const clearHidden = computed(() => isDisabled.value || props.readonly || !accessor.valueRef.value)

  const isComposing = ref(false)
  const handlerInput = (evt: Event) => {
    callEmit(props.onInput, evt)
    if (isComposing.value) {
      return
    }
    const { value } = evt.target as HTMLInputElement
    const oldValue = toRaw(accessor.valueRef.value)
    if (value !== oldValue) {
      accessor.setValue(value)
      callEmit(props.onChange, value, oldValue)

      //controlled value , see: https://github.com/IDuxFE/idux/issues/495
      nextTick(() => syncValue())
    }
  }

  const handlerCompositionStart = (evt: CompositionEvent) => {
    isComposing.value = true
    callEmit(props.onCompositionStart, evt)
  }
  const handlerCompositionEnd = (evt: CompositionEvent) => {
    callEmit(props.onCompositionEnd, evt)
    if (isComposing.value) {
      isComposing.value = false
      handlerInput(evt)
    }
  }

  const isFocused = ref(false)
  const handlerFocus = (evt: FocusEvent) => {
    isFocused.value = true
    callEmit(props.onFocus, evt)
  }
  const handlerBlur = (evt: FocusEvent) => {
    isFocused.value = false
    callEmit(props.onBlur, evt)
    accessor.markAsBlurred()
  }

  const handlerClear = (evt: MouseEvent) => {
    callEmit(props.onClear, evt)
    accessor.setValue('')
  }

  return {
    elementRef,
    accessor,
    isDisabled,
    clearIcon,
    clearHidden,
    isClearable,
    isFocused,

    focus,
    blur,

    handlerInput,
    handlerCompositionStart,
    handlerCompositionEnd,
    handlerFocus,
    handlerBlur,
    handlerClear,
  }
}
