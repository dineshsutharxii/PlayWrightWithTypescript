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
    //Check if HomePage exists
    async isHomePageExists(){
        let title = await this.page.title();
        if (title) {
            return true
        } else {
            return false
        }
    }

    //Click 'My Account' link
    async clickMyAccount(){
        try {
            await this.linkMyAccount.click();
        } catch (error) {
            console.log("Error while clicking my account : ", error)
            throw error;
        }
    }

    //Click 'Register'
    async clickRegister(){
        try {
            await this.linkRegister.click();
        } catch (error) {
            console.log("Error while clicking Register : ", error)
            throw error;
        }
    }

    //Click 'Login'
    async clickLogin(){
        try {
            await this.linkLogin.click();
        } catch (error) {
            console.log("Error while clicking Login : ", error)
            throw error;
        }
    }

    //Enter product Name
    async enterProductName(prodctName:string){
        try {
            await this.txtSearchbox.fill(prodctName);
        } catch (error) {
            console.log("Error while entering product Name : ", error)
            throw error;
        }
    }

    //Click Search button
    async clickSeach(prodctName:string){
        try {
            await this.btnSearch.click();
        } catch (error) {
            console.log("Error while clicking Search button : ", error)
            throw error;
        }
    }

}