import API from "./API";

const api = "database.json"

const service = {
    getData: (async() =>{
        return await API.get(api)
    })
}

export default service;