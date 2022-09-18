export const getArtist = async (id) => {
    const response = await fetch(
        `https://vast-cove-97715.herokuapp.com/api/artists/${id}`
    )
    const data = await response.json()
    return data.data

}

export const getArtists = async () => {
    const response = await fetch('https://vast-cove-97715.herokuapp.com/api/artists');
    const data = await response.json()
    return data.data
}