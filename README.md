# 23AID215 - USER INTERFACE AND DESIGN
# Application Letter - Job/Higher Studies 💼📖

## 📌 Overview
This is a **HTML and CSS project** for an **Application Letter** that can be used for applying for a **Software Engineer position** or **Higher Studies**. The webpage is styled using **Inline, Internal, and External CSS** to demonstrate various styling techniques. 

**🆕 NEW FEATURE:** Added browser search functionality that opens a browser and searches for "India" to demonstrate web automation capabilities.

---

## 🖥️ **Technologies Used**
- **HTML5** 🏗️ (Structuring the content)
- **CSS3** 🎨 (Styling using inline, internal, and external methods)
- **JavaScript** ⚡ (Interactive search functionality)
- **Playwright** 🎭 (Browser automation testing)
- **Node.js** 📦 (Package management and automation scripts)

## 🎯 **Features**
✅ **Well-structured Application Letter**  
✅ **Blue-bordered design with a shadow effect**  
✅ **Underlined Title and Highlighted Key Points**  
✅ **Proper Font Styling and Layout**  
✅ **Uses Inline, Internal, and External CSS**  
✅ **🔍 Browser Search Demo** - Interactive search functionality for "India"  
✅ **🎭 Automated Browser Testing** - Playwright scripts for testing search functionality  

---

## 🔍 **Browser Search Feature**
The project now includes a browser search demonstration that:
- Opens a search interface when clicking "🔍 Open Browser & Search for India"
- Automatically searches for "India" with relevant results
- Provides interactive search functionality for other terms
- Demonstrates browser automation concepts

### Search Results for India Include:
- India - Wikipedia (Country information)
- Incredible India - Tourism information
- India News - Latest headlines
- Economy of India - Economic data
- Culture of India - Cultural heritage

---

## 🛠️ **How to Use**

### Basic Usage
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/MounishSenisetty/Assignment1.git
   cd Assignment1
   ```

2. **Open the Application Letter**  
   ```bash
   # Open index.html in your browser
   open index.html
   # Or serve it locally
   python3 -m http.server 8080
   # Then visit http://localhost:8080/index.html
   ```

3. **Try the Search Feature**  
   - Click the "🔍 Open Browser & Search for India" button
   - Experience the interactive search functionality
   - Search for other terms like "Google" or "Programming"

### Advanced Usage (Browser Automation)

4. **Install Dependencies**  
   ```bash
   npm install
   npm run install-playwright
   ```

5. **Run Browser Automation Script**  
   ```bash
   # Run the search automation script
   npm run search
   ```

6. **Run Automated Tests**  
   ```bash
   # Run Playwright tests
   npx playwright test test-search-india.js
   ```

---

## 📁 **Project Structure**
```
Assignment1/
├── index.html          # Main application letter page
├── search.html         # Interactive search demo page
├── styles.css          # External CSS styling
├── search-india.js     # Browser automation script
├── test-search-india.js # Playwright test cases
├── package.json        # Node.js dependencies
└── README.md          # Project documentation
```

---

## 🧪 **Testing**
The project includes automated browser tests using Playwright:
- **Search Functionality Test**: Verifies India search works correctly
- **Navigation Test**: Tests navigation from main page to search page
- **Interactive Elements Test**: Validates all buttons and inputs work

Run tests with: `npx playwright test test-search-india.js`

---

## 🎯 **Browser Automation Demo**
The `search-india.js` script demonstrates:
- Opening a browser programmatically
- Navigating to search pages
- Interacting with form elements
- Taking screenshots of results
- Automated testing workflows

---

## 🌟 **Learning Objectives**
This project demonstrates:
- **HTML/CSS**: Structure and styling techniques
- **JavaScript**: Interactive web functionality  
- **Browser Automation**: Playwright automation concepts
- **Testing**: Automated UI testing practices
- **Package Management**: Node.js and npm usage

---

## 📸 **Screenshots**

### Application Letter Page
![Application Letter](https://github.com/user-attachments/assets/48935574-e2f9-456d-8d77-ffa00a1794ea)

### Search Demo Page  
![Search Demo](https://github.com/user-attachments/assets/0b62bb73-9db7-4def-96e2-427de6f4dfb4)

---

## 🤝 **Contributing**
Feel free to fork this repository and submit pull requests for any improvements.

## 📄 **License**
This project is open source and available under the [MIT License](LICENSE).
