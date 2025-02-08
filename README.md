# Prompt Generator 

![Img](https://github.com/user-attachments/assets/152205c2-d4e7-489c-9ef3-a8971f4f6709)
This project is an Express-based backend API that generates prompts using data from a React-based frontend. The API receives data about a role, context, action, and instructions, and it returns a generated prompt based on that data. The prompt is then displayed on the frontend.

## Technologies Used

- **Backend:** Express, Node.js
- **LLM:** Local Ollama Mistral 7b
- **Frontend:** React, JavaScript

## Setup Instructions

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/pathakjiop/Prompt-AI.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install required dependencies:
   ```bash
   npm install
   ```
4. Run the Express server:
   ```bash
   node index.js
   ```

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install required dependencies:
   ```bash
   npm install
   ```
3. Run the React app:
   ```bash
   npm start
   ```

## Usage

1. Start both the backend and frontend servers as described in the setup instructions.
2. Open your browser and navigate to `http://localhost:3000` to use the prompt generator.

## Files Description

- `app.js`: Defines the main Express application and routes.
- `promptModel.js`: Defines the Prompt model used to store prompt data.
- `promptController.js`: Defines the controller functions to handle requests and generate prompts.
- `promptRoutes.js`: Defines the routes for the prompt-related endpoints.
- `promptgenerator.js`: Defines the frontend React component and functions to fetch data from the backend and display the generated prompt.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
