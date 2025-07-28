# Wedding Invitation

A beautiful, responsive wedding invitation built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Beautiful Design** - Elegant wedding-themed styling with custom colors
- 📱 **Responsive** - Works perfectly on all devices
- ✨ **Animations** - Smooth animations powered by Framer Motion
- 🎭 **TypeScript** - Full type safety and excellent developer experience
- 🎯 **Modern Stack** - Built with Vite, React 18, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Couple Information
Edit the following files to customize the wedding details:
- `src/components/Hero.tsx` - Couple names and main message
- `src/components/Details.tsx` - Date, time, and venue information
- `src/components/RSVP.tsx` - Contact information and RSVP deadline
- `src/components/Footer.tsx` - Final message and details

### Colors and Styling
- Custom colors are defined in `tailwind.config.js`
- Main color palette includes:
  - Rose Gold (`#E8B4B8`)
  - Champagne (`#F7E7CE`)
  - Dusty Rose (`#D4A5A5`)
  - Sage (`#9CAF88`)

### Fonts
The project uses Google Fonts:
- **Dancing Script** - For script/cursive text
- **Playfair Display** - For serif headings and body text

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Main header with couple names
│   ├── Details.tsx       # Wedding date, time, location
│   ├── RSVP.tsx         # RSVP information and contact
│   ├── Footer.tsx       # Thank you message and footer
│   └── WeddingInvitation.tsx  # Main component
├── App.tsx              # Root app component
├── main.tsx             # Entry point
└── index.css            # Global styles and Tailwind imports
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!

---

Made with ❤️ for your special day 