import typography from './typography'
import sidenav from './sidenav'
import fadeInOut from './fadeInOut'

export default (variables) => {
  const style = {
    typ: typography(variables),
    sidenav: sidenav(variables)
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
    },
    fadeInOut: fadeInOut(variables)
  }, style)
}
