import { html } from 'snabbdom-jsx';
import defaultSettings from './defaultSettings';

export default function Typography({
  className,
  children = '',
  display3,
  display2,
  display1,
  headline,
  title,
  subheading,
  caption,
  primary,
  secondary,
  style,
  materialSettings: {
    primaryColor,
    secondaryColor,
    typographyColor
  } = defaultSettings
}) {

  return (
    <div
      class={{
        [className]: className,
        'text-display-3': display3,
        'text-display-2': display2,
        'text-display-1': display1,
        'text-headline': headline,
        'text-title': title,
        'text-subheading': subheading,
        'text-caption': caption
      }}
      style={Object.assign({
        color: primary ? primaryColor : secondary ? secondaryColor : typographyColor
      }, style)}>
      {children}
    </div>
  );
}
