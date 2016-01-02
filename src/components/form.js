import { html } from 'snabbdom-jsx';

export default function Form({ props: {
  children,
  className,
  onSubmit,
  style = {}
}}) {

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
