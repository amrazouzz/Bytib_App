import ApiManager from "./ApiManager";

export const user_login = async data => {
    try {
        const response = await ApiManager("/authorize/",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            data: data
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}
