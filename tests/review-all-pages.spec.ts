import { test, expect } from '@playwright/test';

const pages = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Scan Photos', url: '/services/scan-photos' },
  { name: 'Organize', url: '/services/organize' },
  { name: 'Bring to Life', url: '/services/bring-to-life' },
  { name: 'All About Photos', url: '/services/all-about-photos' },
  { name: 'Express Feelings', url: '/services/express-feelings' },
  { name: 'Our Mission', url: '/services/our-mission' },
  { name: 'Galleries', url: '/galleries' },
  { name: 'Alterations Gallery', url: '/galleries/alterations' },
  { name: 'Restorations Gallery', url: '/galleries/restorations' },
  { name: 'Organization Gallery', url: '/galleries/organization' },
  { name: 'Albums Gallery', url: '/galleries/albums' },
  { name: 'Express Feelings Gallery', url: '/galleries/express-feelings' },
  { name: 'Training', url: '/training' },
  { name: 'Save Photos Day', url: '/training/save-photos-day' },
  { name: 'Sip and Sort', url: '/training/sip-and-sort' },
  { name: 'Resources', url: '/resources' },
  { name: 'Testimonials', url: '/testimonials' },
  { name: 'About', url: '/about' },
  { name: 'Contact', url: '/contact' },
];

test.describe('Page Review', () => {
  for (const page of pages) {
    test(`Review ${page.name} page`, async ({ page: browserPage }) => {
      console.log(`\n=== Reviewing ${page.name} (${page.url}) ===`);

      // Navigate to page
      await browserPage.goto(`http://localhost:3000${page.url}`, {
        waitUntil: 'networkidle',
      });

      // Check page loads successfully
      await expect(browserPage).toHaveURL(new RegExp(page.url));
      console.log(`✓ Page loads successfully`);

      // Check for console errors
      const errors: string[] = [];
      browserPage.on('console', msg => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      // Check for proper phone number
      const phoneText = await browserPage.textContent('body');
      if (phoneText?.includes('(555) 123-4567')) {
        console.log(`⚠️  WARNING: Placeholder phone number found!`);
      }
      if (phoneText?.includes('(561) 703-9789')) {
        console.log(`✓ Correct phone number present`);
      }

      // Check navigation is visible
      const nav = browserPage.locator('nav[aria-label="Main navigation"]');
      await expect(nav).toBeVisible();
      console.log(`✓ Navigation visible`);

      // Check for brand colors (navy and orange)
      const hasNavyBlue = await browserPage.locator('[class*="primary"]').count() > 0;
      const hasOrange = await browserPage.locator('[class*="accent"]').count() > 0;
      console.log(`✓ Brand colors present: Navy=${hasNavyBlue}, Orange=${hasOrange}`);

      // Check for images
      const images = browserPage.locator('img');
      const imageCount = await images.count();
      console.log(`✓ Images found: ${imageCount}`);

      // Check for Next.js Image optimization
      const nextImages = await browserPage.locator('img[loading="lazy"]').count();
      console.log(`✓ Optimized images: ${nextImages}/${imageCount}`);

      // Take screenshot
      await browserPage.screenshot({
        path: `tests/screenshots/${page.name.replace(/\s+/g, '-').toLowerCase()}.png`,
        fullPage: true,
      });
      console.log(`✓ Screenshot saved`);

      // Check mobile responsiveness
      await browserPage.setViewportSize({ width: 375, height: 667 });
      await browserPage.waitForTimeout(500);

      // Check hamburger menu is visible and works
      const hamburgerButton = browserPage.locator('header button.lg\\:hidden').first();
      const hasHamburgerMenu = await hamburgerButton.isVisible();

      if (hasHamburgerMenu) {
        await hamburgerButton.click();
        await browserPage.waitForTimeout(300);
        const mobileNav = browserPage.locator('div.lg\\:hidden nav');
        const isMobileNavVisible = await mobileNav.isVisible();
        console.log(`✓ Mobile responsive: hamburger=${hasHamburgerMenu}, nav=${isMobileNavVisible}`);
        // Close mobile menu
        await hamburgerButton.click();
        await browserPage.waitForTimeout(200);
      } else {
        console.log(`✓ Mobile responsive: ${hasHamburgerMenu}`);
      }

      // Reset viewport
      await browserPage.setViewportSize({ width: 1280, height: 720 });

      // Check for accessibility
      const skipLink = browserPage.locator('a:has-text("Skip to content")');
      const hasSkipLink = await skipLink.count() > 0;
      console.log(`✓ Skip to content link: ${hasSkipLink}`);

      // Report errors
      if (errors.length > 0) {
        console.log(`⚠️  Console errors found:`);
        errors.forEach(error => console.log(`   - ${error}`));
      } else {
        console.log(`✓ No console errors`);
      }

      console.log(`=== ${page.name} review complete ===\n`);
    });
  }

  test('Test navigation dropdowns', async ({ page }) => {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    // Test Services dropdown
    const servicesLink = page.locator('nav a:has-text("Services")');
    await servicesLink.hover();
    await page.waitForTimeout(300);

    const dropdown = page.locator('[role="menu"]');
    await expect(dropdown).toBeVisible({ timeout: 2000 });
    console.log('✓ Services dropdown opens on hover');

    // Test clicking submenu item
    const scanPhotosLink = page.locator('[role="menuitem"]:has-text("Scan Your Printed Photos")');
    await expect(scanPhotosLink).toBeVisible();
    await scanPhotosLink.click();
    await expect(page).toHaveURL(/\/services\/scan-photos/);
    console.log('✓ Dropdown navigation works');
  });

  test('Test contact form', async ({ page }) => {
    await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle' });

    // Check form fields
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();
    await expect(page.locator('select[name="service"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    console.log('✓ All form fields present');

    // Check service areas displayed
    const serviceAreasText = await page.textContent('body');
    expect(serviceAreasText).toContain('Palm Beach County');
    expect(serviceAreasText).toContain('Broward County');
    console.log('✓ Service areas displayed');
  });
});
