/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-pendo',
  isDevelopingAddon: function() {
    return false;
  },
  contentFor: function(type, config) {
    if (type === 'head' && config.environment !== 'test') {
      return "<script type=\"text/javascript\">\n" +
        "(function(apiKey){\n" +
        "  (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];\n" +
        "    v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){\n" +
        "    o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);\n" +
        "    y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';\n" +
        "    z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');\n" +
        "})('" + config['ember-cli-pendo'].apiKey + "');\n" +
        "</script>\n";
    }
  }
};
