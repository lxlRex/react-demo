export const login = async ({ userName, password }) => {
    let userInfo = { userName, password, token: '123', mobile: '18862144444', nickName: '呵呵' };
    return {
        code: 0,
        data: userInfo
    };
};
