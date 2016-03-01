import appbar from './appbar'
import button from './button'
import calendar from './calendar'
import checkbox from './checkbox'
import fadeInOut from './fadeInOut'
import form from './form'
import icon from './icon'
import input from './input'
import menu from './menu'
import sidenav from './sidenav'
import spinner from './spinner'
import typography from './typography'

export default (variables) => {
  const style = {
    appbar: appbar(variables),
    button: button(variables),
    calendar: calendar(variables),
    checkbox: checkbox(variables),
    fadeInOut: fadeInOut(variables),
    form: form(variables),
    icon: icon(variables),
    input: input(variables),
    menu: menu(variables),
    sidenav: sidenav(variables),
    spinner: spinner(variables),
    typ: typography(variables)
  }

  return Object.assign({
    rules: {
      body: Object.assign({
        fontFamily: 'Roboto, Noto, sans-serif',
        WebkitFontSmoothing: 'antialiased',
        WebkitTextSizeAdjust: '100%'
      }, style.typ.body),
      h1: style.typ.display3,
      h2: style.typ.display2,
      h3: style.typ.display1,
      h4: style.typ.headline,
      h5: style.typ.title
    }
  }, style)
}
