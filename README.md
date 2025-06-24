# Calculator Web App

A simple web-based calculator built with Flask for the backend and vanilla JavaScript for the frontend. The app supports basic arithmetic operations, square, cube, square root, and cube root calculations.

## Features

- Responsive calculator UI
- Basic arithmetic operations (+, -, ×, /, %)
- Square, cube, square root, and cube root functions
- Real-time clock display
- Error handling for invalid expressions and division by zero
- Docker support for easy deployment
- Automated tests with pytest
- CI/CD pipeline using GitHub Actions

## Project Structure

```
.
├── app.py                # Flask backend
├── requirements.txt      # Python dependencies
├── Dockerfile            # Docker configuration
├── static/
│   ├── index.js          # Frontend JavaScript
│   └── style.css         # Stylesheet
├── templates/
│   └── index.html        # HTML template
├── tests/
│   └── test_app.py       # Pytest unit tests
└── .github/
    └── workflows/
        └── main.yml      # GitHub Actions workflow
```

## Getting Started

### Prerequisites

- Python 3.x
- pip

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd calculator-app
    ```

2. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```

3. Run the application:
    ```sh
    python app.py
    ```
    The app will be available at [http://localhost:5000](http://localhost:5000).

### Running Tests

```sh
pytest
```

### Docker

To build and run the app using Docker:

```sh
docker build -t calculator-app .
docker run -p 5000:5000 calculator-app
```

### CI/CD

This project uses GitHub Actions for automated testing and Docker image deployment. See [.github/workflows/main.yml](.github/workflows/main.yml) for details.

## License

MIT License
