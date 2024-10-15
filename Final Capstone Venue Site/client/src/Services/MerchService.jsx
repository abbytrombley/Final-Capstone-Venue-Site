export const getAllMerch = () => {
    return fetch(`https://localhost:7229/api/Merch`).then((res) => res.json())
}

export const createMerch = (merch) => {
    return fetch(`https://localhost:7229/api/Merch`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(merch)
    })
}

export const deleteMerch = (merchId) => {
    return fetch(`https://localhost:7229/api/Merch/${merchId}`, { method: "DELETE" });
  };

  export const getMerchById = (merch) => {
    return fetch(
        `https://localhost:7229/api/Merch/${merch}?_expand=user`
      ).then((res) => res.json());
  }

  export const updateMerch = (merch) => {
    return fetch(`https://localhost:7229/api/Merch/${merch.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(merch)
    })
  }