import { Given, When, Then, Before } from "@cucumber/cucumber";


import { chromium, Page, Browser, expect, firefox } from "@playwright/test";

let browser: Browser;

let page: Page;

//creating the page and browser objects for the rest of the methods


Given('User starts at the main page', async function () {
  console.log("running my first test");
  browser = await chromium.launch({ headless: false });

  page = await browser.newPage();

  await page.goto("http://localhost:3000");
  console.log("awaiting");

});


Given('User clicks on the login link', async function () {

  console.log("clicking on the login link");

  await page.locator("//a[normalize-space()='Login']").click();
  console.log("on line 17");
  await page.locator("//input[@placeholder='Username']").waitFor({ state: 'visible' });
});

Given('User enters their username {string}', async function (username) {

  console.log("users their username");
  const element = await page.locator("//input[@placeholder='Username']")
  // console.log(element.isVisible);
  await element.type(username);
  console.log("Username entered");
  await page.locator("//input[@placeholder='Password']").waitFor({ state: 'visible' });
  console.log(element);
  await page.waitForTimeout(2000);

});




Given('User enters their password {string}', async function (password) {

  await page.locator("//input[@placeholder='Password']").type(password);
  await page.waitForTimeout(2000);
});

When('User clicks on the login button', async function () {
  // Write code here that turns the phrase above into concrete actions
  await page.locator("//button[@type='submit']").click();
  await page.waitForTimeout(2000);
});


Then('User should see their dashboard', async function () {


  console.log("users should see their dashboard");
  const myUrl = await page.url();
  console.log(myUrl);
});

Then('The user should see a {string} message for an unsuccessful login', async function (message) {
  console.log("line 72");
  const myUrl = await page.url();
  console.log(myUrl);
  const successText =  await page.locator("//h5[normalize-space()='Invalid credentials or Non-existent user']").textContent();
  console.log(successText);
  const successMessage =await page.locator("//h5[normalize-space()='Invalid credentials or Non-existent user']")
  console.log(successText);
  console.log("----------------");
  await expect(successText).toEqual(message);

  
  
 
});