import {browser, by, element} from 'protractor';

export class ShipProduction {
  navigateTo() {
    browser.get('/space');
  }

  setShipQuantity(numb: number) {
    const input = element(by.css('[formcontrolname="shipCount"]'));
    input.clear().then(() => input.sendKeys(numb));
  }

  setFighterType() {
    const radios = element.all(by.css(`[formcontrolname="shipType"]`));
    radios.first().click();
  }

  submitProduceForm() {
    const button = element(by.buttonText('Zamów'));
    button.click();
  }

  getShipsCount() {
    const ships = element.all(by.css('app-space-ship'));
    return ships.count();
  }
}
