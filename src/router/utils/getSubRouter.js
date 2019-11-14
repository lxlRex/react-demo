export default (subRouter, parentPath = '') => {
    if (parentPath) {
        return subRouter.map(e => {
            return {
                ...e,
                path: `${parentPath}${e.path}`
            };
        });
    }
    return subRouter;
};
