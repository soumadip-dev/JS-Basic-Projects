# 02-Infinity-Scroll

This project showcases an infinite scroll feature using the Unsplash API. The application dynamically loads random images as the user scrolls down the page, creating a continuous browsing experience without the need for pagination.

## Key Features

- **Infinite Scrolling**: Automatically fetches and displays more images when the user scrolls near the bottom of the page.
- **Responsive Design**: The layout adapts to different screen sizes, ensuring a smooth experience on desktops, tablets, and mobile devices.
- **Elegant Hover Effects**: Images are displayed with smooth zoom and shadow effects on hover, enhancing the visual appeal.
- **Loader Animation**: A subtle loader is displayed while new images are being fetched, improving user feedback.

## How It Works

- **Unsplash API**: Images are sourced from the Unsplash API, with an initial batch of 8 images loaded. As the user scrolls, additional batches of 30 images are fetched and displayed.
- **JavaScript**: Handles API requests, dynamically creates image elements, and manages the infinite scroll functionality.

