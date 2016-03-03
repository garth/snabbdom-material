import merge from 'deepmerge'
import insert from 'insert-css'
import easyStyle from 'easy-style'
import getChild from '../helpers/getChild'

import { baseVariables, getComponentVariables } from './variables'
import defaults from './defaults'

// inject the css in to the page
import css from './index.scss'
insert(css, { prepend: true })

let baseStyle

export function init (variables, overrides = {}) {
  baseStyle = merge(defaults(variables), overrides)
  Object.keys(baseStyle.rules).forEach((rule) => easyStyle.rule(rule, baseStyle.rules[rule]))
}

export function getStyle (name, overrides) {
  if (!baseStyle) {
    init(getComponentVariables(baseVariables))
  }
  return overrides
    ? merge(getChild(baseStyle, name), overrides)
    : getChild(baseStyle, name)
}

export { baseVariables, getComponentVariables }
