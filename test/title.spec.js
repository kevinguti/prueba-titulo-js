const {test, expect} = require('@playwright/test');

test('valida el titulo exacto', async ({ page }) => {
  //abre la pagina example.com
    await page.goto('https://example.com');

    await sleep(3000);
  // Validar que el título de la página sea el esperado
  await expect(page).toHaveTitle('Example Domain');
});


test ('valida titulo con regex (contiene palabra)', async ({ page }) => {
  //abre la pagina example.com
  await page.goto('https://example.com');

  await sleep(3000);
  // Validar que el título de la página contenga la palabra "Example"
  await expect(page).toHaveTitle(/Example/);
});


function sleep (time){
  return new Promise((resolve) => setTimeout(resolve, time));
}