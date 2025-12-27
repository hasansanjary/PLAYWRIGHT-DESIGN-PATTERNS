import { test, expect } from '@playwright/test';

test.skip('browser fixture Testing', async ({browser}) => {

    // const browser = await chromium.launch({ headless: false });

    const context = await browser.newContext({});

    const page = await context.newPage();

    await page.goto('https://parabank.parasoft.com/parabank/index.htm')

    expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');

});

test.skip('context fixture testing', async ({context}) => {

    // const browser = await chromium.launch({ headless: false });

    // const context = await browser.newContext({});

    //suitable for multi‑tab or multi‑window automation
    console.log(context.pages().length  + " page(s) open in this context.");

    const page = await context.newPage();

    await page.goto('https://parabank.parasoft.com/parabank/index.htm')

    expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');

});

test.skip('page fixture testing', async ({page}) => {

    // const browser = await chromium.launch({ headless: false });

    // const context = await browser.newContext({});

    // const page = await context.newPage();

    await page.goto('https://parabank.parasoft.com/parabank/index.htm')

    expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');

});