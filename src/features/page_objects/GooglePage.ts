import { By, Key } from "selenium-webdriver";
import { AbstractPageObject } from "./AbstractPageObject";
import { driver } from "../support/hook";

export class GooglePage extends AbstractPageObject {
  private searchInput = By.id("APjFqb");
  private searchContainerResults = By.id("rso");
  private searchResults = By.xpath("//div");

  constructor() {
    super(driver);
  }

  setSearchInput = async (input: string) => {
    await this.driver.findElement(this.searchInput).sendKeys(input, Key.RETURN);
    return this;
  };

  getResultsCount = async () => {
    var container = await this.driver.findElement(this.searchContainerResults);
    return (await container.findElements(this.searchResults)).length;
  };

  open = async () => {
    const pageUrl: string = "https://www.google.com/";
    await this.driver.get(pageUrl);
  };
}
