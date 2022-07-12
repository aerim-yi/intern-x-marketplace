export const getOrders = () => {
    return Promise.resolve({
        result: [{
            sell: {
                data: {
                    properties: {
                        image_url: 'img',
                        name: 'name',
                        price: '2.57 ETH'
                    }
                }
            },
            buy: {
                data: {
                    quantity: '76374832743246327478326473623624783',
                }
            }
        }]
    })
}
