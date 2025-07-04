// test-search-india.js - Playwright test to demonstrate "open browser and search for India"
const { test, expect } = require('@playwright/test');

test('Open browser and search for India', async ({ page }) => {
  console.log('Starting browser automation test for searching India...');
  
  // Navigate to the search page
  await page.goto('http://localhost:8080/search.html');
  
  // Verify the page loaded correctly
  await expect(page).toHaveTitle('Search Demo - India Search');
  
  // Verify that "India" is pre-filled in the search box
  const searchInput = page.locator('#searchInput');
  await expect(searchInput).toHaveValue('India');
  
  // Verify that search results for India are already displayed
  await expect(page.locator('h3')).toContainText('Search Results for: "india"');
  
  // Verify that India-related search results are shown
  await expect(page.locator('.result-title').first()).toContainText('India - Wikipedia');
  
  // Test the search functionality by clicking "Search for India" button
  await page.click('button:has-text("Search for India")');
  
  // Wait for results to load and verify they contain India information
  await expect(page.locator('.result-item')).toHaveCount(5); // Should have 5 India-related results
  
  // Verify specific India-related content in results
  await expect(page.locator('.result-description').first()).toContainText('Republic of India');
  await expect(page.locator('.result-description').nth(1)).toContainText('Incredible India');
  
  // Test typing a different search term
  await searchInput.fill('Google');
  await page.click('button:has-text("Search")');
  
  // Verify search results changed
  await expect(page.locator('h3')).toContainText('Search Results for: "google"');
  
  // Navigate back to the main application letter page
  await page.click('a:has-text("Back to Application Letter")');
  await expect(page).toHaveTitle('Application Letter');
  
  console.log('✅ Browser automation test completed successfully!');
});

test('Verify search functionality from main page', async ({ page }) => {
  // Start from the main application letter page
  await page.goto('http://localhost:8080/index.html');
  
  // Verify the main page loaded
  await expect(page).toHaveTitle('Application Letter');
  
  // Find and click the search button
  await page.click('a:has-text("🔍 Open Browser & Search for India")');
  
  // Verify we navigated to the search page
  await expect(page).toHaveTitle('Search Demo - India Search');
  
  // Verify India search is automatically performed
  await expect(page.locator('#searchInput')).toHaveValue('India');
  await expect(page.locator('h3')).toContainText('Search Results for: "india"');
  
  console.log('✅ Main page to search navigation test completed successfully!');
});