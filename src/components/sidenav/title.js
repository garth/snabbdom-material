import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';
import Button from '../appbar/button';
import defaultMaterial from '../defaultMaterial';

export default function SidenavTitle({
  className = '',
  onClose,
  showCloseButton = false,
  style = {},
  material = defaultMaterial
}, children = '') {

  return (
    <div
      classNames={className ? ['paper-divider', className] : 'paper-divider'}
      style={Object.assign({
        height: '64px',
        lineHeight: '32px',
        padding: '16px 8px 0 16px',
        fontSize: '20px'
      }, style)}>
      {showCloseButton ? (
        <Button
          style={{
            float: 'right'
          }}
          className="waves-dark"
          onClick={onClose}
          material={material}>
          {
            h('svg', {
              style: {
                position: 'relative',
                top: '4px'
              },
              attrs: {
                fill: material.typographyColor || defaultMaterial.typographyColor,
                height: 24,
                viewBox: '0 0 24 24',
                width: 24
              }
            }, [
              h('path', { attrs: { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' } }),
              h('path', { attrs: { d: 'M0 0h24v24H0z', fill: 'none' } })
            ])
          }
        </Button>
      ) : <span/>}
      {h('span', children)}
    </div>
  );
}
