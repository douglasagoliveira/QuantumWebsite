import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dir, '..');
mkdirSync(outDir, { recursive: true });

const exe = 'C:/Users/Douglas/AppData/Local/ms-playwright/chromium-1248/chrome-win64/chrome.exe';
const base = 'http://localhost:4321/shot';

// pontos de scroll normalizados (0–1) para percorrer hero + seções
const points = [0, 0.05, 0.12, 0.2, 0.3, 0.42, 0.55, 0.68, 0.8, 0.9, 1];
const width = Number(process.env.W || 1440);
const height = Number(process.env.H || 900);
const prefix = process.env.PREFIX || 'p';

const browser = await chromium.launch({ executablePath: exe, headless: true });
const page = await browser.newPage({ viewport: { width, height } });

for (const y of points) {
  const url = `${base}?y=${y}`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  // espera o scroll programático + reveals assentarem
  await page.waitForTimeout(2500);
  const file = resolve(outDir, `${prefix}${String(y).replace('.', '_')}.png`);
  await page.screenshot({ path: file });
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  const sy = await page.evaluate(() => window.scrollY);
  console.log(`${file}  scrollHeight=${h} scrollY=${sy}`);
}

await browser.close();
