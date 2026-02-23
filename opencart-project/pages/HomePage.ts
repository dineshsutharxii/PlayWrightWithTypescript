import {Page, expect, Locator} from '@playwright/test'

export class HomePage{

    private readonly page: Page;
    //locator
    private readonly linkMyAccount: Locator;
    private readonly linkRegister: Locator;
    private readonly linkLogin: Locator;
    private readonly txtSearchbox: Locator;
    private readonly btnSearch: Locator;

    //constructor
    constructor(page:Page){
        this.page = page;
        this.linkMyAccount = page.locator("span:has-text('My Account')");
        this.linkRegister = page.locator("a:has-text('Register')");
        this.linkLogin = page.locator("a:has-text('Login')");
        this.txtSearchbox = page.locator("input[placeholder='Search']");
        this.btnSearch = page.locator("#search button[type='button']");

    }

    //action methods

}