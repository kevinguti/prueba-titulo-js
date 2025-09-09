const { test, expect } = require('@playwright/test');

test('valida el título exacto de Facebook', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await sleep(3000);
    // Usa el guion correcto: "-"
    await expect(page).toHaveTitle('Facebook - log in or sign up');
});

test('valida título con regex (contiene Facebook)', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await sleep(3000);
    await expect(page).toHaveTitle(/Facebook/);
});

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
