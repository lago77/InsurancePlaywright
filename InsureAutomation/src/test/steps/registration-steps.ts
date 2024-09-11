import { Given, When, Then } from "@cucumber/cucumber";


import {chromium, Page, Browser, expect, firefox } from "@playwright/test";

let browser: Browser;

let page: Page; 
//syncing browser and page files.



Given('User navigates to the application', async function () {
  console.log("running my first test");
  browser = await firefox.launch({headless:false});

  page = await browser.newPage();

  await page.goto("http://localhost:3000");
  console.log("awaiting");
  


});



Then('User clicks on the Registration link', async function () {
  
  console.log("in the second step definition");
 
  await page.locator("xpath=//a[normalize-space()='Registration']").click();


  console.log("Registration link is visible");
  console.log("here noooooooooooooooooow")

  
});


Given('User enters an email {string}', async function (email) {
  
  console.log("testing the email");
  await page.waitForTimeout(2000);

  await page.locator("//input[@placeholder='email']").type(email);
  await page.waitForTimeout(2000);
  console.log(email);

});

Given('User enters a name {string}', async function (name) {

  console.log("running my first test");
  await page.locator("//input[@placeholder='name']").type(name);
  await page.waitForTimeout(2000);

});


Given('User enters a username {string}', async function (username) {

  console.log("running my first test");
  await page.locator("//input[@placeholder='Username']").type(username);
  await page.waitForTimeout(2000);

});

Given('User enters a password {string}', async function (password) {
  console.log("running my first test");
  await page.locator("//input[@placeholder='Password']").type(password);
  await page.waitForTimeout(2000);
 
});


Then('User clicks on the Register button', async function () {
  console.log("running my first test");
  await page.locator("//button[@type='submit']").click();
  await page.waitForTimeout(2000);
 ;
});

Then('The user should see a {string} message', async function (message) {
  const successText =  await page.locator("//h5[normalize-space()='Successful registration']").textContent();
  const successMessage =await page.locator("//h5[normalize-space()='Successful registration']")
  console.log(successText);
  await expect(successMessage).toBeVisible();
 
});