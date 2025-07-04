const { chromium } = require('playwright');

async function searchForIndia() {
    console.log('Starting browser automation to search for India...');
    
    // Launch browser
    const browser = await chromium.launch({ 
        headless: false, // Set to true if you want to run without GUI
        slowMo: 1000 // Slow down by 1 second between actions for better visibility
    });
    
    const context = await browser.newContext();
    const page = await context.newPage();
    
    try {
        // Navigate to Google
        console.log('Navigating to Google...');
        await page.goto('https://www.google.com');
        
        // Wait for the search box to be visible
        await page.waitForSelector('input[name="q"]', { timeout: 10000 });
        
        // Type "India" in the search box
        console.log('Typing "India" in search box...');
        await page.fill('input[name="q"]', 'India');
        
        // Press Enter to search
        console.log('Pressing Enter to search...');
        await page.press('input[name="q"]', 'Enter');
        
        // Wait for search results to load
        console.log('Waiting for search results...');
        await page.waitForSelector('#search', { timeout: 10000 });
        
        // Take a screenshot of the search results
        await page.screenshot({ path: 'india-search-results.png' });
        console.log('Screenshot saved as india-search-results.png');
        
        // Get the first few search result titles
        const searchResults = await page.$$eval('h3', elements => 
            elements.slice(0, 5).map(el => el.textContent)
        );
        
        console.log('Top 5 search results for "India":');
        searchResults.forEach((title, index) => {
            console.log(`${index + 1}. ${title}`);
        });
        
        // Wait for 3 seconds to see the results
        await page.waitForTimeout(3000);
        
    } catch (error) {
        console.error('Error during search:', error);
    } finally {
        // Close the browser
        console.log('Closing browser...');
        await browser.close();
        console.log('Browser automation completed successfully!');
    }
}

// Run the search function
searchForIndia().catch(console.error);