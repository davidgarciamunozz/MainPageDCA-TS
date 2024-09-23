export const getDatas = async () => {
    try {
        const data = await fetch('https://hp-api.onrender.com/api/characters').then(res => res.json());
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}