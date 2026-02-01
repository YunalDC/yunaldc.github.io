# Lush Crafts - Sustainable Botanical Website

## 📁 Project Files

This package contains a complete, responsive website for Lush Crafts educational botanical products.

### Files Included:
1. **index.html** - Homepage
2. **gallery.html** - Botanical Gallery with filtering
3. **process.html** - Crafting Process documentation
4. **about.html** - About Us page
5. **styles.css** - Complete CSS styling (separate file)
6. **script.js** - Interactive JavaScript functionality

## 🎨 Design Features Implemented

### ✅ Homepage (index.html)
Based on Wireframe Fig 9.0:
- Lush Craft Logo (top left)
- Navigation menu: About Us | Botanical Gallery | The Process
- Hero section with "Sustainable Botanical Crafts" heading
- Botanical image placeholder with decorative SVG
- "Explore Our Story" call-to-action button
- Botanical Gallery preview section with 4 product cards:
  - Lavender Soap
  - Rose Petal Bath Soak
  - Eucalyptus Balm
  - Herbal Candle
- Our Story section with text and crafting process image
- Our Commitment section with sustainability visual
- Footer with:
  - Navigate links
  - Legal (Privacy Policy)
  - Educational Partner (ECU link - mandatory external link)
  - Social media icons (Instagram, Facebook, Pinterest)
  - Copyright notice

### ✅ Botanical Gallery Page (gallery.html)
Based on Wireframe Fig 10.0:
- Page header: "Botanical Gallery - Product Showcase with Categories"
- Filter buttons: All/Soap | Bath | Balm | Candle | etc.
- 8 Product cards in responsive grid:
  - Lavender Soap
  - Rose Petal Bath Soak
  - Eucalyptus Balm
  - Herbal Candle
  - Peppermint Soap
  - Chamomile Bath Tea
  - Calendula Healing Balm
  - Citrus Blend Candle
- Each card includes:
  - Botanical image with custom SVG patterns
  - Product title
  - Ingredient details
  - "Learn More" button
- Interactive filtering system (working with JavaScript)
- Same footer as homepage

### ✅ Process Page (process.html)
Based on Wireframe Fig 11.0:
- Page header: "The Crafting Process"
- 4 detailed process steps:
  1. **Sustainable Sourcing**
     - Step image with plant illustration
     - Detailed description
  2. **Traditional Preparation**
     - Mortar and pestle visual
     - Method description
  3. **Handcrafted Creation**
     - Hands crafting visual
     - Zero-waste techniques explanation
  4. **Quality Documentation**
     - Documentation visual
     - Knowledge preservation details
- Call-to-action section with buttons
- Same footer structure

### ✅ About Page (about.html)
Based on Wireframe Fig 12.0:
- Page header: "About Lush Craft"
- Four content cards:
  1. **Our Story**
     - Mission statement
     - Brand history
  2. **Our Mission**
     - Educational commitment
     - Sustainability focus
  3. **Our Values**
     - Traditional methods
     - Transparency
  4. **Our Commitment**
     - Educational partnerships
     - Future generations focus
- Values highlights section with 4 icons:
  - Traditional Methods
  - Organic Ingredients
  - Zero Waste
  - Full Documentation
- Call-to-action section
- Same footer structure

## 🎨 CSS (styles.css) - SEPARATE FILE

The CSS file is completely separate and includes:

### Design System:
- **Colors**: Purple palette (#8B7AA3, #C9B8D9, #6B4E7E) + botanical greens
- **Typography**: 
  - Display font: Cormorant Garamond (serif)
  - Body font: Jost (sans-serif)
- **Spacing**: CSS custom properties for consistent spacing
- **Animations**: Fade-in, slide, float, pulse effects

### Key Features:
1. **Mobile-First Responsive Design**
   - Breakpoints: 600px, 768px, 900px
   - Flexible grid layouts
   - Touch-friendly buttons (44x44px minimum)

2. **WCAG 2.1 Accessibility**
   - High contrast ratios
   - Focus states for keyboard navigation
   - ARIA labels
   - Screen reader support

3. **Animations & Interactions**
   - Smooth hover effects
   - Page load animations
   - Scroll-triggered reveals
   - Floating backgrounds

4. **Component Styles**
   - Header with sticky navigation
   - Product cards with hover effects
   - Interactive filter buttons
   - Custom SVG patterns for each product
   - Responsive footer grid

## 💻 JavaScript (script.js)

Interactive features:
1. **Mobile Menu Toggle** - Hamburger menu for mobile devices
2. **Product Filtering** - Filter gallery products by category
3. **Smooth Scrolling** - Anchor link animations
4. **Intersection Observer** - Scroll-triggered animations
5. **Accessibility Features** - Skip to main content link
6. **Performance Optimization** - Debounced resize events

## 🚀 How to Use

### Option 1: Local Setup
1. Download all 6 files to the same folder
2. Keep them in the same directory (important!)
3. Open `index.html` in any web browser
4. Navigate between pages using the menu

### Option 2: Web Server Setup
1. Upload all files to your web hosting
2. Ensure `styles.css` and `script.js` are in the same directory as HTML files
3. Access via your domain: `yourdomain.com/index.html`

### File Structure:
```
your-folder/
├── index.html          (Homepage)
├── gallery.html        (Gallery page)
├── process.html        (Process page)
├── about.html          (About page)
├── styles.css          (Separate CSS file - linked in all HTML)
├── script.js           (JavaScript functionality)
└── README.md           (This file)
```

## 📱 Responsive Breakpoints

- **Mobile**: < 600px (1 column)
- **Tablet**: 600px - 899px (2 columns)
- **Desktop**: > 900px (4 columns for gallery, 2 for content)

## 🎯 UI/UX Strategy Implementation

Based on your project proposal:

### 1. Frictionless Path to Knowledge ✅
- Clear navigation
- Minimal clicks to information
- Mobile-optimized content
- Guest access (no registration needed)

### 2. Human-Centric Transparency ✅
- Authentic storytelling in About section
- Process documentation with visuals
- Educational partnership display (ECU link)
- Ingredient transparency

### 3. Accessibility as Standard ✅
- WCAG 2.1 compliant
- 44x44px touch targets
- High contrast colors
- Keyboard navigation support
- Screen reader friendly

## 🌿 Design Aesthetic

**Soft Botanical Theme** matching your wireframes:
- Primary: Purple (#8B7AA3)
- Accent: Soft greens, roses, golds
- Background: Cream (#FAF8F5)
- Typography: Elegant serif headings, clean sans-serif body

**Visual Elements:**
- Custom SVG botanical illustrations
- Gradient backgrounds
- Floating animation effects
- Rounded corners (20px radius)
- Soft shadows

## 📋 Wireframe Coverage Checklist

✅ Homepage wireframe (Fig 9.0) - 100% implemented
✅ Botanical Gallery wireframe (Fig 10.0) - 100% implemented  
✅ Process page wireframe (Fig 11.0) - 100% implemented
✅ About page wireframe (Fig 12.0) - 100% implemented
✅ Navigation flowchart (Fig 8.0) - All pages linked correctly
✅ Color scheme - Purple and botanical theme
✅ Responsive mobile-first design
✅ WCAG 2.1 accessibility standards
✅ Educational focus throughout
✅ ECU partnership link (mandatory external link)

## 🔗 External Links

- **Google Fonts**: Cormorant Garamond & Jost (loaded from Google Fonts CDN)
- **ECU Website**: https://www.ecu.edu.au (educational partner link in footer)

## 📊 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Mobile

## 🎓 Educational Features

Per your project requirements:
- Process documentation for each product
- Sustainable sourcing information
- Traditional methods preservation
- Educational partnership display
- Knowledge repository structure
- Impact-focused messaging

## 💡 Future Enhancements (Optional)

If you want to expand:
1. Add real product images to replace SVG placeholders
2. Implement contact form
3. Add blog/tutorial section
4. Create "Ingredient Library" page
5. Add video embeds for process demonstrations
6. Implement shopping cart (if selling)
7. Add customer testimonials
8. Create downloadable resources section

## 🐛 Troubleshooting

**CSS not loading?**
- Ensure `styles.css` is in the same folder as HTML files
- Check that the link tag in HTML says `href="styles.css"`
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)

**JavaScript not working?**
- Ensure `script.js` is in the same folder
- Check browser console for errors (F12 > Console tab)
- Make sure JavaScript is enabled in browser

**Links not working?**
- All internal links are relative
- Files must be in same directory
- File names are case-sensitive on some servers

## 📧 Support

This website was created based on your GDI2100.1 project proposal for Lush Crafts.
Student ID: 10676653
Course: HTML Web Design

---

**Built with:**
- Semantic HTML5
- Modern CSS3 with custom properties
- Vanilla JavaScript (no frameworks)
- Mobile-first responsive design
- WCAG 2.1 accessibility standards

**Design inspired by:**
- National Crafts Council (Sri Lanka)
- House of Lonali
- Selyn Fair Trade
- Lush Cosmetics

© 2024 Lush Craft Educational Project
