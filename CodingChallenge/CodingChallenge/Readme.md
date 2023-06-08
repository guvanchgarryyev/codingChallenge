# The World Bank EdStats Webpage

This repository contains the source code for a web application that displays The World Bank Edstatistics using data from a JSON file. The application allows users to search for specific countries and provides sorting functionality for the table columns.

## Features

- Fetches data from a JSON file (`data.json`) using the Fetch API.
- Dynamically populates an HTML table with the retrieved data.
- Provides a search bar that allows users to filter the table based on their search term.
- Implements sorting functionality for each table column, allowing users to sort the data in ascending or descending order.
- Responsive design to ensure optimal viewing experience across different devices.

## Usage

To use the application, follow these steps:
1. Clone the repository to your local machine or download the source code files.
2. Open the `index.html` file in a web browser. If it does not work, you will have to use a live server
3. The webpage will display the World Bank statistics table, initially populated with the data from `data.json`.
4. Use the search input field to filter the table based on specific countries or data points.
5. Click on any table header to sort the table in ascending or descending order based on the selected column.

## File Structure

The repository consists of the following files:

- `index.html`: The main HTML file that defines the structure of the webpage and includes the necessary JavaScript and CSS files.
- `script.js`: JavaScript file that fetches the data from `data.json`, populates the table, and implements search and sorting functionality.
- `data.json`: JSON file containing the World Bank statistics data.
- `styles.css`: CSS file that defines the styling and layout of the webpage.

## Dependencies

The application does not have any external dependencies or libraries. It utilizes the built-in Fetch API to retrieve data from `data.json` and manipulates the DOM using vanilla JavaScript.
