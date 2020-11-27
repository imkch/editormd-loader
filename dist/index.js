
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.EditormdLoader = factory(global.$));
}(this, (function ($) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  /*
   * @Author: G.TAO
   * @Date: 2020-11-27 13:54:46
   * @LastEditors: G.TAO
   * @LastEditTime: 2020-11-27 16:55:01
   * @Description: 
   */
  class EditormdLoader {
    constructor(libPath) {
      this.libPath = libPath || '//editor.md.ipandao.com';
      window.$ = window.jQuery = $__default['default'];
    }

    createEditor(el, options = {}) {
      this._loadStyles(['editormd.min.css']);

      const scripts = ['editormd.min.js'];
      options.path = `${this.libPath}/lib/`;

      this._loadScripts(scripts, () => {
        this.editormd = editormd(el, options);
      });
    }

    markdownToHtml(el, options = {}) {
      this._loadStyles(['editormd.min.css', 'editormd.preview.min.css']);

      const scripts = [`lib/marked.min.js`, `lib/prettify.min.js`, `lib/raphael.min.js`, `lib/underscore.min.js`, `lib/sequence-diagram.min.js`, `lib/flowchart.min.js`, `lib/jquery.flowchart.min.js`, `editormd.min.js`];

      this._loadScripts(scripts, () => {
        editormd.markdownToHTML(el, options);
      });
    }

    _loadScripts(scripts, callback) {
      scripts = scripts.map(script => `${this.libPath}/${script}`);
      const deferreds = [];

      for (let idx = 0; idx < scripts.length; idx++) {
        deferreds.push($__default['default'].getScript(scripts[idx]));
      }

      $__default['default'].when.apply(null, deferreds).then(() => {
        callback && callback();
      });
    }

    _loadStyles(styles) {
      styles.forEach(style => {
        $__default['default']('head').append($__default['default']('<link rel="stylesheet" type="text/css"/>').attr('href', `${this.libPath}/css/${style}`));
      });
    }

  }

  return EditormdLoader;

})));
