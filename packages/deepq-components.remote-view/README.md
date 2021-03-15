# deepq-components.remote-view

> A component that says "HelloB" with green text.

## Installation

### Directly in the browser

Drop the component in with a `<script>` tag alongside Vue:

```html
<div id="app">
<!-- ... use component here ... -->
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/deepq-components.remote-view"></script>
<script>
new Vue({ el: '#app' })
</script>
```

### In a module system

Install the component with NPM:

```bash
npm install deepq-components.remote-view
```

Then import the component:

```js
import RemoteView from 'deepq-components.remote-view'
```

And either globally register it for use in all components:

```js
Vue.component(RemoteView, 'deepq-components.remote-view')
```

or locally register it for use in an individual component:

```js
export default {
components: { RemoteView }
}
```

## Usage

```html
<!-- No props or content are necessary. -->
<remote-view></remote-view>
```
