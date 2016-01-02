import { html } from 'snabbdom-jsx';

export default function Form({
  className,
  onSubmit,
  style = {}
}, children = '') {

  return (
    <form
      style={style}
      class={{
        [className]: className
      }}
      on-submit={e => {
        e.preventDefault();
        if (typeof onSubmit === 'function') {
          onSubmit(e);
        }
      }}
      noValidate>
      {children}
    </form>
  );

}
