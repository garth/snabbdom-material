import merge from 'deepmerge'
import insert from 'insert-css'
import easyStyle from 'easy-style'
import getChild from '../helpers/getChild'

// inject the css in to the page
import css from './index.scss'
insert(css, { prepend: true })

const {
  style: addStyle,
  rule: addRule
} = easyStyle
let baseStyle

export function initStyle (defaultStyle, appStyle = {}) {
  baseStyle = merge(defaultStyle, appStyle)
  Object.keys(baseStyle.rules).forEach((rule) => addRule(rule, baseStyle.rules[rule]))
}

export function getStyle (name, overrides) {
  return overrides
    ? merge(getChild(baseStyle, name), overrides)
    : getChild(baseStyle, name)
}

export function className (name, overrides) {
  return addStyle(getStyle(name, overrides))
}
