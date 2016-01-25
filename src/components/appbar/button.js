import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';
import Waves from '../helpers/waves';
import classNames from 'classnames';
import defaultMaterial from '../defaultMaterial';

export default function AppbarButton({
  className = '',
  onClick,
  href = '',
  style = {},
  material = defaultMaterial
}, children = '') {

  const lightWaves = material.primaryLightWaves || defaultMaterial.primaryLightWaves;
  const fontColor = material.primaryFontColor || defaultMaterial.primaryFontColor;
  const disabledFontColor = material.primaryFontColorDisabled || defaultMaterial.primaryFontColorDisabled;
  const enabled = onClick || href;

  // console.log(`${href ? 'a' : 'div'}.${classNames('waves-circle', { 'waves-light': lightWaves }).replace(/ /g, '.')}`);

  return (
    <div
      classNames={className}
      style={Object.assign({
        float: 'left',
        height: '48px',
        width: '48px',
        display: 'inline-block',
        margin: '-8px 0',
        backgroundColor: 'transparent'
      }, style)}>
      {
        h(`${href ? 'a' : 'div'}.${classNames('waves-circle', { 'waves-light': lightWaves }).replace(/ /g, '.')}`, {
          hook: { insert: vnode => enabled ? Waves.attach(vnode.elm) : null },
          on: { click: e => onClick ? onClick(e) : null },
          props: { href },
          style: {
            fontSize: '24px',
            height: '48px',
            width: '48px',
            lineHeight: '48px',
            display: 'inline-block',
            margin: '0',
            color: enabled ? fontColor : disabledFontColor,
            textDecoration: 'none',
            cursor: enabled ? 'pointer' : ''
          }
        }, children)
      }
    </div>
  );
}
