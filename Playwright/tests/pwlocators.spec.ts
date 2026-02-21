/*
recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import {test, expect, Locator} from "@playwright/test";

//page.getByAltText() to locate an element, usually image, by its text alternative.
test("Verify playwright locator getByAltText()",async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/")
    const logo:Locator = page.getByAltText("nopCommerce demo store")
    await expect(logo).toBeVisible();
})

//page.getByText() to locate by text content.
test("Verify playwright locator getByText()",async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/")
    await expect(page.getByText("Welcome to our store")).toBeVisible() //full string
    await expect(page.getByText("Welcome to")).toBeVisible() //substring string
    await expect(page.getByText(/Welcome\s+to\s+Our\s+store/i)).toBeVisible() //regular expression

})

//page.getByRole() to locate by explicit and implicit accessibility attributes.
//syntax - page.getByRole('role', {name:'text'})
test("Verify playwright locator getByRole()",async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/")
    await page.getByRole("link", {name:'Register'}).click()
    await expect(page.getByRole('heading', {name:'Register'})).toBeVisible();
})

//page.getByLabel() to locate a form control by associated label's text.
test("Verify playwright locator getByLabel()",async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/register")
    await page.getByLabel('First name:').fill("John")
    await page.getByLabel('Last name:').fill("Kenedy")
    await page.getByLabel('Email:').fill("John@gmail.co,m")

})

//page.getByPlaceholder() to locate an input by placeholder.
test("Verify playwright locator getByPlaceholder()",async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/register")
    await page.getByPlaceholder('Search store').fill('Apple Macbook')
})

//For this loactor you have to have element with 'title' attribute.
//page.getByTitle() to locate an element by its title attribute.
// test("Verify playwright locator getByTitle()",async ({page}) => {
//     await page.goto("your link")
//     await expect(page.getByTitle('Home page link')).toHaveText('Home')
//     await expect(page.getByTitle('HyperText Markup Language')).toHaveText('HTML');
// })

//page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
// test("Verify playwright locator getByTestId()",async ({page}) => {
//     await page.goto("your link")
//     await expect(page.getByTestId('Home page link')).toHaveText('Home')
//     await expect(page.getByTestId('HyperText')).toHaveText('HTML');
// })