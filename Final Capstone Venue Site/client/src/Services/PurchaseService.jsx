export const getAllPurchases = () => {
    return fetch(`https://localhost:7229/api/EventsPurchase`).then((res) => res.json())
}




export const createPurchase = (purchase) => {
    return fetch(`https://localhost:7229/api/EventsPurchase`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(purchase)
    })
}
