import { browser, element, by } from 'protractor/globals';

export class ThunderdomePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
