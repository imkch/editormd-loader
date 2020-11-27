/*
 * @Author: G.TAO
 * @Date: 2020-11-27 13:54:46
 * @LastEditors: G.TAO
 * @LastEditTime: 2020-11-27 16:55:01
 * @Description: 
 */
import $ from 'jquery';

export default class EditormdLoader {
  constructor(libPath) {
    this.libPath = libPath || '//editor.md.ipandao.com';
    window.$ = window.jQuery = $;
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
    const scripts = [
      `lib/marked.min.js`,
      `lib/prettify.min.js`,
      `lib/raphael.min.js`,
      `lib/underscore.min.js`,
      `lib/sequence-diagram.min.js`,
      `lib/flowchart.min.js`,
      `lib/jquery.flowchart.min.js`,
      `editormd.min.js`
    ];
    this._loadScripts(scripts, () => {
      editormd.markdownToHTML(el, options);
    });
  }
  _loadScripts(scripts, callback) {
    scripts = scripts.map(script => `${this.libPath}/${script}`);
    const deferreds = [];
    for (let idx = 0;idx < scripts.length;idx++) {
      deferreds.push(
        $.getScript(scripts[idx])
      );
    }
    $.when.apply(null, deferreds).then(() => {
      callback && callback();
    });
  }
  _loadStyles(styles) {
    styles.forEach(style => {
      $('head').append($('<link rel="stylesheet" type="text/css"/>').attr('href', `${this.libPath}/css/${style}`));
    });
  }
};