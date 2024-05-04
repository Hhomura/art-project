import service from "./service";

const dataObj = []

service.getData().then((data) =>{
    dataObj = data;
})


export default dataObj;