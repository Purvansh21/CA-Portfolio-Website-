# Favicon Conversion Instructions

## Current Setup
- The website is currently using `favicon.ico` format
- HTML reference: `<link rel="icon" type="image/x-icon" href="/favicon.ico" />`

## To Convert SVG to ICO

### Option 1: Online Converter
1. Go to an online SVG to ICO converter (like convertio.co, cloudconvert.com)
2. Upload the `public/favicon.svg` file
3. Convert to ICO format
4. Download and replace `public/favicon.ico`

### Option 2: Using Image Editing Software
1. Open the SVG in an image editor (GIMP, Photoshop, etc.)
2. Export as ICO format
3. Replace the existing favicon.ico file

### Option 3: Command Line (if you have ImageMagick)
```bash
magick public/favicon.svg public/favicon.ico
```

## Favicon Design
- **Background**: Teal (#0F4C75) - matches website theme
- **Text**: "DS" in white, bold Arial font
- **Size**: 32x32 pixels
- **Style**: Rounded corners (6px radius)

## Current HTML Reference
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

The website is now properly configured to use ICO format favicon. You just need to convert the existing SVG to ICO format using one of the methods above. 