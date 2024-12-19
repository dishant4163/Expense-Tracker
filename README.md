# Expense Tracker

A simple and intuitive web application to help you track your income and expenses. The app allows you to input income and expense details, view your total income and expense, as well as monitor your savings and the maximum income/expense recorded.


## Features

- **Add Income and Expenses**: Users can enter the amount and description for both income and expense categories.
- **Track Maximum Values**: Displays the highest recorded income and expense.
- **Total Income and Expense**: Shows the total of all recorded income and expenses.
- **Savings Monitor**: Displays the current savings (total income minus total expense) and offers motivational feedback on savings.
- **Interactive UI**: Real-time updates as users enter new income or expense data.

## Files Overview

- **index.html**: Contains the structure of the Expense Tracker application, including input fields for amount, product name, and category (Income or Expense).
- **styles.css**: Provides the styling and layout for the app, including colors, fonts, and responsiveness.
- **script.js**: Implements the logic for adding income and expenses, calculating totals, and updating the UI dynamically.

## How to Use

1. **Input Data**:
   - Enter an amount in the "Amount" field.
   - Provide a description for the product/item in the "Product" field.
   - Select whether the entry is an "Income" or "Expense" using the dropdown.
   
2. **Add the Entry**:
   - Click the "ENTER" button to add the income or expense entry. The total income, total expense, and savings will update accordingly.
   
3. **Track Maximum Values**:
   - The app keeps track of the highest recorded income and expense values and displays them.

4. **View Savings**:
   - The app shows the total savings (calculated as total income - total expenses) and provides feedback based on your savings (e.g., "Looks good" or "Start saving!").

## Files Description

### index.html

The `index.html` file provides the main structure for the Expense Tracker application. It includes:
- Input fields for the amount and product description.
- A dropdown for selecting the category (Income or Expense).
- A button for submitting the entered data.
- Sections to display the total income, total expense, and current savings.

### styles.css

The `styles.css` file styles the Expense Tracker, including:
- General page layout and responsive design.
- Input fields, buttons, and sections with colors, fonts, and padding for a smooth user experience.
- Uses Flexbox for easy positioning and centering of elements.
- Uses background gradients and bright colors to make the UI visually appealing.

### script.js

The `script.js` file implements the main functionality of the app:
- It listens for the "ENTER" button click and processes the entered amount and product description.
- It calculates total income, total expenses, and savings.
- It tracks the maximum recorded income and expense and displays them.
- If an expense exceeds the available income (savings), it displays a warning message.

## How to Run

1. **Download or Clone the Repository**:
   - Download the project files or clone this repository to your local machine.

2. **Open the `index.html` File**:
   - Open the `index.html` file in your web browser to use the Expense Tracker application.

3. **Start Adding Entries**:
   - Begin by entering income and expense entries to track your finances. The app will automatically calculate and display totals and savings.

## Technologies Used

- **HTML**: Used for the basic structure of the application.
- **CSS**: Styles the web page and ensures a responsive, user-friendly layout.
- **JavaScript**: Handles the logic for adding and calculating income, expense, savings, and displaying dynamic updates on the web page.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- The design inspiration is based on simple and functional UI patterns.
- The app is built to assist in personal finance management, providing real-time tracking of income and expenses.
