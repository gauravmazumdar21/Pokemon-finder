# Pokemon-finder
This web app allows users to input a Pokemon name, and it utilizes the Pokemon API to generate and display the corresponding Pokemon image if available. The frontend is built with EJS for dynamic HTML rendering, CSS for styling, and JS for user interaction. The backend is powered by Node.js.

## Prerequisites

- Node.js installed on your machine. You can download it [here](https://nodejs.org/).

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/gauravmazumdar21/Pokemon-finder.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd pokemon-finder
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the server:**

    ```bash
    npm start
    ```

    This will start the Node.js server, and you can access the web app at [http://localhost:3000](http://localhost:3000).

## Docker Support
To build a Docker image for the Pokemon Finder app, you can use the following commands:

1. Build the Docker image:

```bash
docker build -t nodejs-pokemon .
```

2. Run the Docker container:

```bash
docker run -it -p 3000:3000 nodejs-pokemon
```
This will run the app inside a Docker container, and you can access it at http://localhost:3000.

## Usage

1. Open your web browser and go to [http://localhost:3000](http://localhost:3000).
2. Enter a Pokemon name into the input field.
3. Click the "Generate" button.
4. The corresponding Pokemon image will be displayed.

## Project Structure

- `public/`: Contains static assets (CSS, JS).
- `views/`: Contains EJS templates.
- `javascript/`: Contains client-side JavaScript.
- `stylesheets/`: Contains CSS files.
- `server.js`: Node.js server script.

## Dependencies

- `express`: Web framework for Node.js.
- `ejs`: Templating engine for embedding dynamic content in HTML files.

## Configuration

- You can customize the Pokemon API endpoint and other configurations in `server.js`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the [Pokemon API](https://pokeapi.co/) for providing Pokemon data.

Feel free to expand upon this README by adding more details about the specific features, dependencies, and any other relevant information about your web app.

