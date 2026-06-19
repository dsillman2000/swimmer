const fs = require('fs');
const puppeteer = require('puppeteer');

const URL = process.argv[2] || 'http://localhost:4000';
const PAD = 48;
const W = 1280;
const H = 720;

async function addShadow(page, inputPath, outputPath) {
  const b64 = fs.readFileSync(inputPath, 'base64');
  await page.setViewport({ width: W + PAD * 2, height: H + PAD * 2 });
  await page.setContent(`
    <body style="margin:0;padding:${PAD}px;background:transparent">
      <img src="data:image/png;base64,${b64}"
           style="display:block;width:${W}px;height:${H}px;border-radius:8px;box-shadow:0 8px 32px rgba(0,0,0,0.18)">
    </body>
  `);
  await page.screenshot({ path: outputPath, omitBackground: true });
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H });
  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 15000 });

  await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'light'));
  await page.screenshot({ path: 'docs/screenshot-light.png' });

  await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark'));
  await page.screenshot({ path: 'docs/screenshot-dark.png' });

  await addShadow(page, 'docs/screenshot-light.png', 'docs/screenshot-light.png');
  await addShadow(page, 'docs/screenshot-dark.png', 'docs/screenshot-dark.png');

  await browser.close();
})();
