import './style.css';
import { init } from './game';

init();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/caterpillars-logic/sw.js');
}
