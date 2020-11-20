import axios from "../Components/axios";

export const getDataApi = () => axios.get(`secure.notion-static.com/1da547de-1912-4183-9f35-27857575d2b5/data1.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201120T053625Z&X-Amz-Expires=86400&X-Amz-Signature=f22c4b947297bca967898b1103b6733b4460cde28b0be5cb6524a2ee140a876e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D"data-1.json"`, {
    baseURL: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com",
});
