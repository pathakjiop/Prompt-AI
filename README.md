# Prompt Generator 

![Screenshot 2024-11-02 193116](https://github.com/user-attachments/assets/152205c2-d4e7-489c-9ef3-a8971f4f6709)

This project is a Django-based backend API that generates prompts using data from a React-based frontend. The API receives data about a role, context, action, and instructions, and it returns a generated prompt based on that data. The prompt is then displayed on the frontend.

## Technologies Used

- **Backend:** Django, Django REST Framework
- **LLM:** Local Ollama Mistral 7b
- **Frontend:** React, JavaScript

## Setup Instructions

### Backend

1. Clone the repository:
   ```
   git clone https://github.com/pathakjiop/Prompt-AI.git
   ```
2. Navigate to the backend directory:
   ```
   cd backend
   ```
3. Install required dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Run the Django server:
   ```
   python manage.py runserver
   ```

### Frontend

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install required dependencies:
   ```
   npm install
   ```
3. Run the React app:
   ```
   npm start
   ```

## Usage

1. Start both the backend and frontend servers as described in the setup instructions.
2. Open your browser and navigate to `http://localhost:3000` to use the prompt generator.

## Files Description

- `urls.py`: Defines the URL patterns for the Django project.
- `models.py`: Defines the Prompt model used to store prompt data.
- `serializers.py`: Defines the serializer for the Prompt model, which is used to convert complex data types into JSON and vice versa.
- `views.py`: Defines the PromptGeneratorView, which handles POST requests to generate a prompt.
- `promptgenerator.js`: Defines the frontend React component and functions to fetch data from the backend and display the generated prompt.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
