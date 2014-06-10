var Widget = require('widget');
var w = Widget();

w.setTitle('Widget');
w.setMessage('millennium falcon');

w.on('append', function(target) {
  console.log('appended: ', target.outerHTML);
});

w.appendTo('.app');
