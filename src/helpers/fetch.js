const baseUrl = "https://pokemon-pichincha.herokuapp.com/pokemons";

const fetchRequest = async (endpoint, data = null, method = 'GET') => {
    try {
        let response;
        let url = `${baseUrl}/${endpoint}`
        if (method === 'GET' || method === 'DELETE') {
            response = await fetch(url, { method });
        } else {
            response = await fetch(url, {
                method,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }

        if (response.ok && response.status < 400) {
            const body = await response.json();
            return body;
        } else {
            const error = await response.json();
            handleError(error);
            return { hasError: true }
        }
    } catch (e) {
        handleError(e)
    }
}

const handleError = (errorResponse) => {
    alert(JSON.stringify(errorResponse))
}


export {
    fetchRequest
}