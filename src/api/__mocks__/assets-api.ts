export const getUserAssets = () => {
    return Promise.resolve({
        result: [{
            image_url: 'img',
            collection: {
                name: 'name'
            },
            name: 'name',
        }]
    })
}
