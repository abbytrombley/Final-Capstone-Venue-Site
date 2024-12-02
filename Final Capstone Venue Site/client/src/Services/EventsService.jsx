//Purpose: to fetch from your Events from databse, get http from swagger

export const getAllEvents = () => {
    return fetch(`https://localhost:7229/api/Events`).then((res) => res.json())
}

export const createEvent = (event) => {
    return fetch(`https://localhost:7229/api/Events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(event)
    })
}

export const deleteEvent = (eventId) => {
    return fetch(`https://localhost:7229/api/Events/${eventId}`, { method: "DELETE" });
  };

  export const getEventById = (event) => {
    return fetch(
        `https://localhost:7229/api/Events/${event}?_expand=user`
      ).then((res) => res.json());
  }

  export const updateEvent = (event) => {
    return fetch(`https://localhost:7229/api/Events/${event.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event)
    })
  }