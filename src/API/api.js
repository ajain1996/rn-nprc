export const BASE_URL = "https://gurudwara.vercel.app";

export const getAllCategories = async (callback) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(BASE_URL + "/api/category/getallcategory", requestOptions)
        .then(response => response.json())
        .then(result => callback(result))
        .catch(error => {
            console.log('\n\n GetAllCategories error: ', error)
            callback(null)
        });
}

export const getAllSubCategories = async (callback) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(BASE_URL + "/api/category/getallsubcategory", requestOptions)
        .then(response => response.json())
        .then(result => callback(result))
        .catch(error => {
            console.log('\n\n getAllSubCategories error: ', error)
            callback(null)
        });
}

export const getAllrecords = async (callback) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(BASE_URL + "/api/data/getallrecord", requestOptions)
        .then(response => response.json())
        .then(result => callback(result))
        .catch(error => {
            console.log('\n\n getAllrecords error: ', error)
            callback(null)
        });
}
