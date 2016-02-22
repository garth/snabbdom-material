import '!style!css!normalize.css/normalize.css'
import '!style!css!sass!../index.scss'

import merge from 'deepmerge'
import easyStyle from 'easy-style'
import getChild from '../helpers/getChild'

const {
  style: addStyle,
  rule: addRule
} = easyStyle
let baseStyle

export function initStyle (defaultStyle, appStyle = {}) {
  baseStyle = merge(defaultStyle, appStyle)
  Object.keys(baseStyle.rules).forEach((rule) => addRule(rule, baseStyle.rules[rule]))
}

export default function style (name, overrides) {
  return overrides
    ? merge(getChild(baseStyle, name), overrides)
    : getChild(baseStyle, name)
}

export function className (name, overrides) {
  return addStyle(style(name, overrides))
}
