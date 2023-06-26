import { After, AfterAll, BeforeAll, Status } from "@cucumber/cucumber";
import { Builder, WebDriver } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";

export let driver: WebDriver;

BeforeAll(async () => {
  const options = new Options();
  options.addArguments("--log-level=1");
  driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(
      options.headless().windowSize({ width: 640, height: 480 })
    )
    .build();

  return driver.manage().window().maximize();
});

AfterAll(async () => driver.quit());

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const attach = this.attach;
    const png = await driver.takeScreenshot();
    const decodedImage = Buffer.from(png, "base64");
    return attach(decodedImage, "image/png");
  }
});
