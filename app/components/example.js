/** @jsx html */
import { html } from 'snabbdom-jsx';
import '!style!css!../vendor/prism.css';
//import '../vendor/prism';

export default ({ code = '' }) => (
  //hook-insert={vnode => window.Prism.highlightElement(vnode.elm, false)}
  <pre classNames="language-jsx">
    <code classNames="language-jsx">
      {code.trim().replace(/  /g, '<br/>')}
    </code>
  </pre>
);
