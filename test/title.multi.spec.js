const {test, expect} = require('@playwright/test');

const casos = [
    {name: "caso1",url: 'https://example.com', esperado: 'Example Domain'},
    {name: "caso2",url: 'https://example.com', esperado: /Example/},
    {name: "caso3",url: 'https://www.google.com', esperado: 'Google'}
];


for (const {name, url, esperado} of casos) {
    test(`valida el titulo de ${url} es ${esperado}`, async ({ page }) => {
        //abre la pagina
        await page.goto(url);

        await sleep(3000);
        // Validar que el título de la página sea el esperado
        await expect(page).toHaveTitle(esperado);
    });
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}