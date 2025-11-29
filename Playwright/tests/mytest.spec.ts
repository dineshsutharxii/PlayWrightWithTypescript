import { test, expect  } from "@playwright/test";

//syntax
// test("title", () => {
//     step1
//     step2
//     step3
// })

//Examples

//fixture - global variable : page, browser
test("Verify page title", async ({page})=>{
    await page.goto("http://www.automationpractice.pl/index.php")
    let page_title = await page.title()
    console.log("Title:", page_title)
    await expect(page).toHaveTitle("My Shop")
})