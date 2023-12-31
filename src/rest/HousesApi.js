const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

class HousesApi {
    
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data; 
        } catch (e) {
            console.log("Error occured in HouseApi get" , e);
        }
    };

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(house),
            });
            return await resp.json();
        
        } catch (e) {
            console.log("Error occured in HousesApi put", e);
        }
    };

    post = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(house),
            });
            return await resp.json();
        } catch (e) {
            console.log("Error occured in HousesApi post", e);
        }
    };

    delete = async (id) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
                
            });
            return await resp.json();
        
        } catch (e) {
            console.log("Error occurd in HousesApi delete method.", e);
        }
    };
}

export const housesApi = new HousesApi();