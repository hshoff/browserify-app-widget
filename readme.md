# The Millennium Falcon Widget

Testing out `browserify` and `brfs` for modular UI development.

### index.js

```js
var Widget = require('widget');
var w = Widget();

w.setTitle('Widget');
w.setMessage('millennium falcon');

w.on('append', function(target) {
  console.log('appended: ', target.outerHTML);
});

w.appendTo('.app');
```

### node_modules/widget.js

```js
var fs = require('fs');
var domify = require('domify');
var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;

var html = fs.readFileSync(__dirname + '/widget.html', 'utf8');

inherits(Widget, EventEmitter);
module.exports = Widget;

function Widget(opts) {
  if (!(this instanceof Widget)) return new Widget(opts);
  this.el = domify(html);
}

Widget.prototype.appendTo = function(target) {
  if (typeof target === 'string') {
    target = document.querySelector(target);
  }
  target.appendChild(this.el);
  this.emit('append', target);
};

Widget.prototype.setTitle = function(title) {
  this.el.querySelector('.title').textContent = title;
};

Widget.prototype.setMessage = function(msg) {
  this.el.querySelector('.msg').textContent = msg;
};
```

# MIT
