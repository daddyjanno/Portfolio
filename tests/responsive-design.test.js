/**
 * Responsive Design Test Suite
 * Automated testing across different breakpoints and orientations
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Test configurations
const BREAKPOINTS = [
  { name: 'Mobile XS (iPhone SE)', width: 320, height: 667 },
  { name: 'Mobile S (iPhone 12)', width: 375, height: 667 },
  { name: 'Mobile M (Galaxy S21)', width: 425, height: 800 },
  { name: 'Tablet (iPad)', width: 768, height: 1024 },
  { name: 'Tablet L (iPad Pro)', width: 1024, height: 1366 },
  { name: 'Desktop (Laptop)', width: 1440, height: 900 },
  { name: 'Desktop XL (4K)', width: 1920, height: 1080 },
];

const ORIENTATIONS = [
  { name: 'Portrait', width: 375, height: 812 },
  { name: 'Landscape', width: 812, height: 375 },
];

// Elements to check for visibility
const CRITICAL_ELEMENTS = [
  'nav', // Navbar
  'h1',  // Main heading
  '[class*="hero"]',
  '[class*="skills"]',
  '[class*="projects"]',
  '[class*="timeline"]',
  '[class*="contact"]',
  'footer',
];

// Results storage
let results = {
  timestamp: new Date().toISOString(),
  breakpoints: [],
  orientations: [],
  issues: [],
  summary: {},
};

/**
 * Check if element is visible in viewport
 */
async function isElementVisible(page, selector) {
  try {
    const element = await page.$(selector);
    if (!element) return { found: false, visible: false, reason: 'Element not found' };

    const box = await page.evaluate((el) => {
      const rect = el.getBoundingClientRect();
      return {
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
        visible: rect.width > 0 && rect.height > 0,
      };
    }, element);

    return { found: true, visible: box.visible, ...box };
  } catch (err) {
    return { found: false, visible: false, reason: err.message };
  }
}

/**
 * Check for layout issues (horizontal scroll, text overflow, etc)
 */
async function checkLayoutIssues(page) {
  return await page.evaluate(() => {
    const issues = [];
    const windowWidth = window.innerWidth;

    // Check for horizontal overflow
    const bodyWidth = document.body.scrollWidth;
    if (bodyWidth > windowWidth) {
      issues.push(`Horizontal overflow detected: ${bodyWidth}px > ${windowWidth}px`);
    }

    // Check for text overflow
    document.querySelectorAll('*').forEach((el) => {
      if (el.scrollWidth > el.clientWidth && el.children.length === 0) {
        const text = el.textContent.substring(0, 50);
        if (text && text.length > 0) {
          issues.push(`Text overflow in ${el.tagName}: "${text}..."`);
        }
      }
    });

    // Check for invisible elements that should be visible
    const hiddenElements = document.querySelectorAll('[style*="display: none"], [style*="visibility: hidden"]');
    if (hiddenElements.length > 0) {
      issues.push(`${hiddenElements.length} elements hidden (may be intentional)`);
    }

    return issues;
  });
}

/**
 * Test a specific breakpoint
 */
async function testBreakpoint(browser, breakpoint) {
  console.log(`\n📱 Testing: ${breakpoint.name} (${breakpoint.width}x${breakpoint.height})`);

  const page = await browser.newPage();
  await page.setViewport({
    width: breakpoint.width,
    height: breakpoint.height,
    deviceScaleFactor: 1,
  });

  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle2', timeout: 30000 });
    // Wait for animations
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Check critical elements
    const elementResults = {};
    for (const selector of CRITICAL_ELEMENTS) {
      const result = await isElementVisible(page, selector);
      elementResults[selector] = result;
    }

    // Check layout issues
    const layoutIssues = await checkLayoutIssues(page);

    // Take screenshot
    const screenshotsDir = path.join(__dirname, '../screenshots');
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }
    const filename = `${breakpoint.name.replace(/\s+/g, '_').toLowerCase()}.png`;
    const filepath = path.join(screenshotsDir, filename);
    await page.screenshot({ path: filepath, fullPage: true });
    console.log(`  ✅ Screenshot saved: ${filename}`);

    const breakpointResult = {
      name: breakpoint.name,
      width: breakpoint.width,
      height: breakpoint.height,
      elements: elementResults,
      layoutIssues: layoutIssues,
      screenshotPath: filename,
      timestamp: new Date().toISOString(),
    };

    // Log results
    let visibleCount = 0;
    Object.entries(elementResults).forEach(([selector, result]) => {
      const status = result.found && result.visible ? '✅' : '❌';
      console.log(`  ${status} ${selector}: ${result.found ? (result.visible ? 'visible' : 'hidden') : 'not found'}`);
      if (result.found && result.visible) visibleCount++;
    });

    if (layoutIssues.length > 0) {
      console.log(`  ⚠️  Layout issues found: ${layoutIssues.length}`);
      layoutIssues.forEach((issue) => {
        console.log(`     - ${issue}`);
        results.issues.push({
          breakpoint: breakpoint.name,
          issue: issue,
          severity: 'medium',
        });
      });
    }

    results.breakpoints.push(breakpointResult);
    return breakpointResult;
  } catch (err) {
    console.error(`  ❌ Error testing ${breakpoint.name}:`, err.message);
    results.issues.push({
      breakpoint: breakpoint.name,
      issue: `Test error: ${err.message}`,
      severity: 'high',
    });
  } finally {
    await page.close();
  }
}

/**
 * Test orientations
 */
async function testOrientation(browser, orientation) {
  console.log(`\n🔄 Testing orientation: ${orientation.name} (${orientation.width}x${orientation.height})`);

  const page = await browser.newPage();
  await page.setViewport({
    width: orientation.width,
    height: orientation.height,
    deviceScaleFactor: 1,
  });

  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle2', timeout: 30000 });
    // Wait for animations
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const layoutIssues = await checkLayoutIssues(page);

    const orientationResult = {
      name: orientation.name,
      width: orientation.width,
      height: orientation.height,
      layoutIssues: layoutIssues,
      timestamp: new Date().toISOString(),
    };

    if (layoutIssues.length > 0) {
      console.log(`  ⚠️  Issues found: ${layoutIssues.length}`);
      layoutIssues.forEach((issue) => {
        console.log(`     - ${issue}`);
      });
    } else {
      console.log(`  ✅ No layout issues detected`);
    }

    results.orientations.push(orientationResult);
  } catch (err) {
    console.error(`  ❌ Error testing ${orientation.name}:`, err.message);
  } finally {
    await page.close();
  }
}

/**
 * Generate HTML report
 */
function generateReport() {
  const reportPath = path.join(__dirname, '../responsive-design-report.html');

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design Test Report</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background: #f5f5f5;
      color: #333;
    }
    h1 { color: #1a1a1a; border-bottom: 3px solid #007bff; padding-bottom: 10px; }
    h2 { color: #007bff; margin-top: 30px; }
    .summary { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .breakpoint-section { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #007bff; }
    .status-ok { color: #28a745; font-weight: bold; }
    .status-error { color: #dc3545; font-weight: bold; }
    .status-warning { color: #ffc107; font-weight: bold; }
    .screenshot { max-width: 100%; margin: 20px 0; border: 1px solid #ddd; border-radius: 4px; }
    .issue-list { background: #fff3cd; padding: 15px; border-radius: 4px; margin: 10px 0; }
    .issue { padding: 8px; margin: 5px 0; background: white; border-left: 3px solid #dc3545; padding-left: 10px; }
    table { width: 100%; border-collapse: collapse; margin: 15px 0; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
    th { background: #f8f9fa; font-weight: 600; }
    tr:hover { background: #f9f9f9; }
    .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
    .badge-pass { background: #d4edda; color: #155724; }
    .badge-fail { background: #f8d7da; color: #721c24; }
    .badge-warn { background: #fff3cd; color: #856404; }
  </style>
</head>
<body>
  <h1>📱 Responsive Design Test Report</h1>
  <div class="summary">
    <p><strong>Generated:</strong> ${new Date().toLocaleString()}</p>
    <p><strong>Test URL:</strong> http://localhost:5173</p>
    <p><strong>Total Breakpoints Tested:</strong> ${results.breakpoints.length}</p>
    <p><strong>Total Orientations Tested:</strong> ${results.orientations.length}</p>
    <p><strong>Issues Found:</strong> <span class="status-${results.issues.length > 0 ? 'error' : 'ok'}">${results.issues.length}</span></p>
  </div>

  <h2>🔍 Breakpoint Results</h2>
  <table>
    <thead>
      <tr>
        <th>Breakpoint</th>
        <th>Resolution</th>
        <th>Critical Elements</th>
        <th>Layout Issues</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      ${results.breakpoints
        .map((bp) => {
          const elementCount = Object.values(bp.elements).filter((el) => el.found && el.visible).length;
          const hasIssues = bp.layoutIssues.length > 0;
          const status = hasIssues ? 'warn' : 'pass';
          return `
        <tr>
          <td><strong>${bp.name}</strong></td>
          <td>${bp.width}x${bp.height}</td>
          <td><span class="badge badge-${elementCount === CRITICAL_ELEMENTS.length ? 'pass' : 'warn'}">${elementCount}/${CRITICAL_ELEMENTS.length} visible</span></td>
          <td>${bp.layoutIssues.length > 0 ? `<span class="badge badge-warn">${bp.layoutIssues.length} issues</span>` : '<span class="badge badge-pass">OK</span>'}</td>
          <td>${status === 'pass' ? '✅' : '⚠️'}</td>
        </tr>
          `;
        })
        .join('')}
    </tbody>
  </table>

  <h2>📸 Screenshots</h2>
  ${results.breakpoints
    .map((bp) => {
      return `
    <div class="breakpoint-section">
      <h3>${bp.name} (${bp.width}x${bp.height})</h3>
      <img src="../screenshots/${bp.screenshotPath}" alt="${bp.name}" class="screenshot">
      ${
        bp.layoutIssues.length > 0
          ? `
        <div class="issue-list">
          <strong>⚠️ Issues Detected:</strong>
          ${bp.layoutIssues.map((issue) => `<div class="issue">${issue}</div>`).join('')}
        </div>
      `
          : '<div class="issue-list" style="background: #d4edda; border-left-color: #28a745;">✅ No issues detected</div>'
      }
    </div>
  `;
    })
    .join('')}

  <h2>🔄 Orientation Results</h2>
  ${results.orientations
    .map((ori) => {
      return `
    <div class="breakpoint-section">
      <h3>${ori.name} (${ori.width}x${ori.height})</h3>
      ${
        ori.layoutIssues.length > 0
          ? `
        <div class="issue-list">
          <strong>⚠️ Issues Detected:</strong>
          ${ori.layoutIssues.map((issue) => `<div class="issue">${issue}</div>`).join('')}
        </div>
      `
          : '<div class="issue-list" style="background: #d4edda; border-left-color: #28a745;">✅ No issues detected</div>'
      }
    </div>
  `;
    })
    .join('')}

  ${
    results.issues.length > 0
      ? `
  <h2>⚠️ All Issues Summary</h2>
  <div class="issue-list">
    ${results.issues.map((issue) => `<div class="issue"><strong>${issue.breakpoint}:</strong> ${issue.issue}</div>`).join('')}
  </div>
  `
      : ''
  }

  <h2>✅ Conclusion</h2>
  <div class="summary">
    <p><strong>Overall Status:</strong> ${results.issues.length === 0 ? '✅ PASS - All responsive tests passed!' : '⚠️ REVIEW NEEDED - Some issues found'}</p>
    <p><strong>Recommendation:</strong> ${results.issues.length === 0 ? 'Portfolio is ready for production deployment.' : 'Please review and fix the issues above before deployment.'}</p>
  </div>

  <footer style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
    <p>Report generated by Puppeteer | ${new Date().toLocaleString()}</p>
  </footer>
</body>
</html>
  `;

  fs.writeFileSync(reportPath, html);
  console.log(`\n📄 Report saved to: ${reportPath}`);
  return reportPath;
}

/**
 * Main test runner
 */
async function runTests() {
  console.log('🚀 Starting Responsive Design Tests...\n');

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    // Test all breakpoints
    console.log('\n=== BREAKPOINT TESTS ===');
    for (const breakpoint of BREAKPOINTS) {
      await testBreakpoint(browser, breakpoint);
    }

    // Test orientations
    console.log('\n=== ORIENTATION TESTS ===');
    for (const orientation of ORIENTATIONS) {
      await testOrientation(browser, orientation);
    }

    // Generate report
    console.log('\n=== GENERATING REPORT ===');
    generateReport();

    // Summary
    console.log('\n\n📊 TEST SUMMARY');
    console.log(`✅ Breakpoints tested: ${results.breakpoints.length}`);
    console.log(`✅ Orientations tested: ${results.orientations.length}`);
    console.log(`⚠️  Issues found: ${results.issues.length}`);

    if (results.issues.length === 0) {
      console.log('\n🎉 All tests passed! Portfolio is responsive-ready.');
    } else {
      console.log('\n⚠️  Please review the issues above.');
    }
  } catch (err) {
    console.error('❌ Test failed:', err);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run tests
runTests();
