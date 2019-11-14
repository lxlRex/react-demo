import Loading from '../../components/src/loading/index';
const install = (axios) => {
    axios.interceptors.request.use((config) => {
        let { showLoading = true } = config;
        if (showLoading)
            Loading.show();
        return config;
    }, (error) => {
        Loading.close();
        return Promise.reject(error);
    });
    axios.interceptors.response.use((response) => {
        Loading.close();
        return response.data;
    }, (error) => {
        Loading.close();
        return Promise.reject(error);
    });
};
export default {
    use: install
};
