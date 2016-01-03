/** @jsx html */
import { html } from 'snabbdom-jsx';
import '!style!css!../vendor/prism.css';
import '../vendor/prism';

export default function Example({
  code = ''
}) {

  return (
    <pre>
      <code
        hook-insert={vnode => window.Prism.highlightElement(vnode.elm, false)}
        classNames="language-jsx">
        {code.trim()}
      </code>
    </pre>
  );
}
