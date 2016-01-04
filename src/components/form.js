import { html } from 'snabbdom-jsx';
import h from 'snabbdom/h';

export default function Form({
  className = '',
  onSubmit,
  style = {}
}, children = '') {

  return (
    <form
      style={style}
      classNames={className}
      on-submit={e => {
        e.preventDefault();
        if (typeof onSubmit === 'function') {
          onSubmit(e);
        }
      }}
      noValidate>
      {h('span', children)}
    </form>
  );

}
