export const getAllMerch = () => {
    return fetch(`http://localhost:5173/merch`).then((res) => res.json())
}

export const createMerch = (merch) => {
    return fetch(`http://localhost:5173/merch`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(merch)
    })
}

export const deleteMerch = (merchId) => {
    return fetch(`http://localhost:5173/merch/${merchId}`, { method: "DELETE" });
  };

  export const getMerchById = (merch) => {
    return fetch(
        `http://localhost:5173/merch/${merch}?_expand=user`
      ).then((res) => res.json());
  }

  export const updateMerch = (merch) => {
    return fetch(`http://localhost:5173/merch/${merch.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(merch)
    })
  }