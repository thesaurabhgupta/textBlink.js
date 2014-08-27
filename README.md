textBlink.js
============

Blink Text with Colors css class. textBlink is as simple animation it display text color which look like blink text. User can add delay blinking of text.

**Demo**
- [JSFiddle] (http://jsfiddle.net/thesaurabhgupta/2e7Lpred/embedded/result/)

### Usage

HTML
```HTML
  <h2>Heading two</h2>
  <h3 class="text">Heading three</h3>
```
Define class
```css
.red{color:red}
```
Then, for usage just simply call
```JavaScript
$('h2').textBlink({addclass:"<classname>"});
```

### Options

- `addclass` - class name which you want to add like for red color `red`
- `delay` - How fast to blink in ms. Default is `1000`

**Example**

```JavaScript
$('h2').textBlink({
    delay: 500,
    addclass: 'red'
});
