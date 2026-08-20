import { expect, test } from '@playwright/test';

const routes = [
  '/', '/about/', '/programs/', '/technology/', '/projects/', '/developers/',
  '/security/', '/open-government/', '/news/', '/roadmap/', '/status/',
  '/privacy/', '/accessibility/', '/contact/'
];

test.describe('public site', () => {
  for (const route of routes) {
    test(`${route} renders successfully`, async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.ok()).toBeTruthy();
      await expect(page.locator('main')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
    });
  }

  test('homepage exposes primary actions', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('link', { name: /explore projects/i })).toBeVisible();
  });

  test('mobile navigation can be opened and used', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'mobile-only behavior');
    await page.goto('/');
    const menu = page.getByRole('button', { name: /menu/i });
    await expect(menu).toBeVisible();
    await menu.click();
    await expect(page.getByRole('link', { name: 'Technology' })).toBeVisible();
  });
});
