const userInput = document.querySelector("#userInp");
        const submitButton = document.querySelector("#subt");
        const displayPoke = document.querySelector("#displayPoke");

        let startCode = true

        if (startCode) {
            submitButton.addEventListener('click', (e) => {
                e.preventDefault();
                const pokeName = userInput.value;
                displayImg(pokeName)
            })
        }

        async function pokemonAPI(p) {
            const apiURL = `https://pokeapi.co/api/v2/pokemon/${p}`;
            try {
                const resp = await fetch(apiURL);
                const data = await resp.json();
                // console.log(data)
                return data
            }
            catch (error) {
                console.error('', error);
                throw error;
            }
        }

        async function displayImg(pokemonName) {
            let pname = pokemonName.toLowerCase();
            const pokemonAPI_Call = await pokemonAPI(pname);
            console.log(pokemonAPI_Call)
            displayPoke.innerHTML = `
            <img src="${pokemonAPI_Call.sprites.other.home.front_default}">
            <h1>${pokemonAPI_Call.forms[0].name}</h1>
            `
            userInput.value = ''
        }