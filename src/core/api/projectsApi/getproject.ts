const Getproject = async () => {
    try {
        const response = await fetch("https://67c8a9fb0acf98d070875d87.mockapi.io/Todo", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) {
            throw new Error(`HPPT error status : ${response.status}`)
        }

        const data = response.json();
        return data
    } catch (err) {
        console.log("error fetch data", err);
        throw err
    }

}



export default Getproject