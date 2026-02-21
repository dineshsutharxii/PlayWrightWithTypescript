import { test, expect, Locator } from "@playwright/test";

test("verify CSS Selectors",async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    //tag#id
    const searchbox:Locator = page.locator("input#small-searchterms")
    await expect(searchbox).toBeVisible();
    await searchbox.fill("T-Shirts")
    await page.waitForTimeout(5000);

    //tag.class
    const searchButton = page.locator("input.search-box-button")
    await searchButton.click();
    await page.waitForTimeout(5000);

    //tag[attribute=value]
    await page.locator("input[name=q]").fill("T-Shirts")
    

})