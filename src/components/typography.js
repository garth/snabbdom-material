import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';
import defaultMaterial from './defaultMaterial';
import classNames from 'classnames';

export default function Typography({
  className = '',
  display3 = false,
  display2 = false,
  display1 = false,
  headline = false,
  title = false,
  subheading = false,
  caption = false,
  primary = false,
  secondary = false,
  style = {},
  material = defaultMaterial
}, children = '') {

  return (
    <div
      classNames={classNames(className, {
        'text-display-3': display3,
        'text-display-2': display2,
        'text-display-1': display1,
        'text-headline': headline,
        'text-title': title,
        'text-subheading': subheading,
        'text-caption': caption
      })}
      style={Object.assign({
        color: primary
          ? material.primaryColor || defaultMaterial.primaryColor
          : secondary
            ? material.secondaryColor || defaultMaterial.secondaryColor
            : material.typographyColor || defaultMaterial.typographyColor
      }, style)}>
      {h('span', children)}
    </div>
  );
}
