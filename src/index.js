import { AppRegistry } from 'react-native';
import App from './App';
import AGENOVA from './assets/fonts/AGENOVA.otf';
import NunitoSans from './assets/fonts/NunitoSans.ttf';
const aGENOVAFontStyles = `@font-face {
    src: url(${AGENOVA});
    font-family: 'AGENOVA';
  }`;
  const nunitoSansFontStyles = `@font-face {
    src: url(${NunitoSans});
    font-family: 'NunitoSans';
  }`;
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
    style.styleSheet.cssText = aGENOVAFontStyles;
  } else {
    style.appendChild(document.createTextNode(aGENOVAFontStyles));
    style.appendChild(document.createTextNode(nunitoSansFontStyles));
  }
  document.head.appendChild(style);

AppRegistry.registerComponent('MyNikkah', () => App);
AppRegistry.runApplication('MyNikkah', {
    rootTag: document.getElementById('root'),
});
