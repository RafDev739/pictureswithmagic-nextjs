#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const sourcePath = '/Users/wilmercastro/Wilmer/Projects/MacAir/PwM/pictureswithmagic_complete';
const pagesDir = path.join(sourcePath, 'pages');
const outputPath = path.join(__dirname, '../extracted-content.json');

console.log('🔍 Starting content extraction from cloned HTML...\n');

// Read all HTML files
const pages = fs.readdirSync(pagesDir).filter(file => file.endsWith('.html'));

const extractedContent = {};

pages.forEach((page, index) => {
  const pageName = page.replace('.html', '');
  console.log(`[${index + 1}/${pages.length}] Processing: ${pageName}`);

  try {
    const html = fs.readFileSync(path.join(pagesDir, page), 'utf8');
    const $ = cheerio.load(html);

    // Extract page title
    const title = $('title').text() || pageName;

    // Extract meta description
    const description = $('meta[name="description"]').attr('content') || '';

    // Extract headings
    const headings = {
      h1: $('h1').map((i, el) => $(el).text().trim()).get().filter(Boolean),
      h2: $('h2').map((i, el) => $(el).text().trim()).get().filter(Boolean),
      h3: $('h3').map((i, el) => $(el).text().trim()).get().filter(Boolean),
    };

    // Extract paragraphs (limit to meaningful ones)
    const paragraphs = $('p')
      .map((i, el) => $(el).text().trim())
      .get()
      .filter(p => p.length > 20) // Filter out very short paragraphs
      .slice(0, 50); // Limit to first 50 paragraphs

    // Extract images
    const images = $('img')
      .map((i, el) => ({
        src: $(el).attr('src'),
        alt: $(el).attr('alt') || '',
      }))
      .get()
      .filter(img => img.src);

    // Extract links
    const links = $('a')
      .map((i, el) => ({
        text: $(el).text().trim(),
        href: $(el).attr('href'),
      }))
      .get()
      .filter(link => link.href && link.text);

    // Extract buttons
    const buttons = $('button, a[role="button"], .button')
      .map((i, el) => $(el).text().trim())
      .get()
      .filter(Boolean);

    // Extract forms
    const forms = [];
    $('form').each((i, el) => {
      const formInputs = $(el)
        .find('input, textarea, select')
        .map((j, input) => ({
          type: $(input).attr('type') || $(input).prop('tagName').toLowerCase(),
          name: $(input).attr('name') || '',
          placeholder: $(input).attr('placeholder') || '',
          required: $(input).attr('required') !== undefined,
        }))
        .get();

      if (formInputs.length > 0) {
        forms.push({
          action: $(el).attr('action') || '',
          method: $(el).attr('method') || 'POST',
          fields: formInputs,
        });
      }
    });

    extractedContent[pageName] = {
      title,
      description,
      headings,
      paragraphs,
      images: images.slice(0, 20), // Limit images
      links: links.slice(0, 30), // Limit links
      buttons,
      forms,
      stats: {
        totalHeadings: headings.h1.length + headings.h2.length + headings.h3.length,
        totalParagraphs: paragraphs.length,
        totalImages: images.length,
        totalLinks: links.length,
        totalForms: forms.length,
      },
    };

    console.log(`  ✓ Extracted: ${extractedContent[pageName].stats.totalHeadings} headings, ${extractedContent[pageName].stats.totalParagraphs} paragraphs, ${extractedContent[pageName].stats.totalImages} images`);
  } catch (error) {
    console.error(`  ✗ Error processing ${pageName}:`, error.message);
  }
});

// Write to JSON file
fs.writeFileSync(outputPath, JSON.stringify(extractedContent, null, 2));

console.log(`\n✅ Content extraction complete!`);
console.log(`📄 Total pages processed: ${Object.keys(extractedContent).length}`);
console.log(`💾 Output saved to: ${outputPath}`);

// Generate summary
const totalStats = Object.values(extractedContent).reduce(
  (acc, page) => ({
    headings: acc.headings + page.stats.totalHeadings,
    paragraphs: acc.paragraphs + page.stats.totalParagraphs,
    images: acc.images + page.stats.totalImages,
    links: acc.links + page.stats.totalLinks,
    forms: acc.forms + page.stats.totalForms,
  }),
  { headings: 0, paragraphs: 0, images: 0, links: 0, forms: 0 }
);

console.log('\n📊 Summary:');
console.log(`   Headings: ${totalStats.headings}`);
console.log(`   Paragraphs: ${totalStats.paragraphs}`);
console.log(`   Images: ${totalStats.images}`);
console.log(`   Links: ${totalStats.links}`);
console.log(`   Forms: ${totalStats.forms}`);
