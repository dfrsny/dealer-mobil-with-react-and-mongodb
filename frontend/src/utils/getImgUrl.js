function getImgCar(name) {
    try {
        return new URL(`../assets/cars/${name}`, import.meta.url);
    } catch (error) {
        console.error(`Error loading car image: ${name}`, error);
        return ''; // Return an empty string or a placeholder image URL if desired
    }
}

function getImgNews(name) {
    try {
        return new URL(`../assets/news/${name}`, import.meta.url);
    } catch (error) {
        console.error(`Error loading news image: ${name}`, error);
        return ''; // Return an empty string or a placeholder image URL if desired
    }
}
function getImgTest(name) {
    try {
        return new URL(`../assets/testi/${name}`, import.meta.url);
    } catch (error) {
        console.error(`Error loading news image: ${name}`, error);
        return ''; // Return an empty string or a placeholder image URL if desired
    }
}

export { getImgCar, getImgNews, getImgTest };
