import {Aurelia} from 'aurelia-framework'
import environment from './environment';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  requirejs.config({ paths: { 'vs': '../node_modules/monaco-editor/dev/vs' }});
  aurelia.start().then(() => aurelia.setRoot());
}
