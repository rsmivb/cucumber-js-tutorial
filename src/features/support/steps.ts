import assert from "assert";
import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { GooglePage } from "../page_objects/GooglePage";

let googlePage: GooglePage;

Given("user opens a Google Search Page", function () {
  googlePage = new GooglePage();
  googlePage.open();
});

When(
  "user inputs a {string} on search bar",
  { timeout: 10000 },
  async function (keyword: string) {
    await googlePage.setSearchInput(keyword);
  }
);

When("another when", function (table: DataTable) {
  console.log(table.hashes()[0]["word"]);
});

Then(
  "user could see {int} the results found based on criteria",
  async function (expected: number) {
    const results = await googlePage.getResultsCount();

    assert.equal(results > expected, true);
  }
);
