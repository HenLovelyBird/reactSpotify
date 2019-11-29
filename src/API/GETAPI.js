

const username = "user16";
const password = "c9WEUxMS294hN6fF";
const auth = btoa(username + ":" + password);
const headers = new Headers({
    "x-rapidapi-key": "26481b32f0mshd0632c6bc822ba0p1beb06jsne1e5167c63bf",
    "x-rapidapi-host": " deezerdevs-deezer.p.rapidapi.com"
});

const GETAPI = async (deezer) => {
    let url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist + "&limit=6";
    try {
        let response = await fetch(url, {
            method: "GET",
            headers
        })
        if (response.ok) {
            return await response.json()
        }
    } catch (error) {
        console.log(error);
    }
}

export default GETAPI;