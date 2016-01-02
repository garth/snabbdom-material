import { html } from 'snabbdom-jsx';

export default function Mask({
  className,
  isOpen,
  dark = true,
  onClick,
  style: styleOverrides = {}
}) {

  let style = {
    position: 'fixed',
    zIndex: 1000,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  };

  if (dark) {
    style = Object.assign(style, {
      opacity: isOpen ? '0' : '1',
      transition: 'opacity .3s',
      delayed: {
        opacity: isOpen ? '1' : '0'
      }
    });
  }

  return (
    <div
      class={{
        mask: true,
        dark,
        [className]: className
      }}
      style={Object.assign(style, styleOverrides)}
      on-click={onClick}/>
  );

}
