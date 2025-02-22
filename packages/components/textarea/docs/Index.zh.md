---
category: components
type: 数据录入
title: Textarea
subtitle: 文本域
---

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## API

### IxTextarea

#### TextareaProps

> 除以下表格之外还支持原生 `textarea` 元素的[所有属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)。

| 名称 | 说明 | 类型  | 默认值 | 全局配置 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `v-model:value` | 控件值 | `string` | - | - | - |
| `control` | 控件控制器 | `string \| number \| AbstractControl` | - | - | 配合 `@idux/cdk/forms` 使用, 参考 [Form](/components/form/zh) |
| `autoRows` | 是否显示自适应 `rows` | `boolean \| { minRows: number, maxRows: number }` | `false` | ✅ | - |
| `clearable` | 是否显示清除图标 | `boolean` | `false` | ✅ | - |
| `clearIcon` | 设置清除图标 | `string \| #clearIcon={onClear}` | `'close-circle'` | ✅ | - |
| `computeCount` | 自定义计算字符数的函数 | `(value: string) => string` | - | ✅ | 优先级高于 `maxCount` |
| `disabled` | 是否禁用状态 | `boolean` | `false` | - | - |
| `maxCount` | 数字提示显示的最大值 | `number` | - | ✅ | 仅用于提示，不做校验控制 |
| `readonly` | 是否只读状态 | `boolean` | `false` | - | - |
| `resize` | 缩放方向 | `none \| both \| horizontal \| vertical` | `vertical` | ✅ | 启用 `autoRows` 的时，仅 `none \| horizontal` 有效 |
| `showCount` | 是否展示字符数 | `boolean` | `false` | ✅ | - |
| `size` | 设置大小 | `'sm' \| 'md' \| 'lg'` | `'md'` | ✅ | - |
| `onClear` | 清除图标被点击后的回调 | `(evt: MouseEvent) => void` | - | - | - |

### 主题变量

<!-- TODO -->
| 变量名 | default 主题| 说明 |
| --- | --- | --- |
