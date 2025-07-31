# Sephora Gift Card Landing Page

This project is an interactive landing page designed to promote a $750 Sephora gift card. The landing page features a visually appealing design with smooth animations and a structured layout to guide users through the process of claiming the offer.

## Project Structure

```
sephora-giftcard-landing
├── public
│   └── index.html          # Main HTML document for the landing page
├── src
│   ├── assets              # Directory for images and other assets
│   ├── components          # React components for different sections of the landing page
│   │   ├── CallToActionButton.jsx  # Central call-to-action button component
│   │   ├── GradientBackground.jsx   # Component for the glowing gradient background
│   │   ├── HookSection.jsx          # Component for the attention-grabbing hook
│   │   ├── NoticeSection.jsx        # Component for geographical restrictions notice
│   │   └── StepsSection.jsx         # Component outlining the steps to claim the offer
│   ├── App.jsx              # Main application component
│   ├── index.js             # Entry point for the React application
│   └── styles
│       └── main.css        # CSS styles for the landing page
├── package.json             # npm configuration file
└── README.md                # Project documentation
```

## Features

- **Glowing and Blurry Gradient Background**: Enhances the visual appeal of the landing page.
- **Smooth Animations**: Provides an engaging user experience.
- **Structured Layout**: Clearly outlines the offer and steps to claim it.
- **Responsive Design**: Ensures the landing page looks great on all devices.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd sephora-giftcard-landing
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to view the landing page.

## Geographical Restrictions

Please note that this offer may be subject to geographical restrictions. Ensure you check the eligibility criteria before proceeding.

## License

This project is licensed under the MIT License.