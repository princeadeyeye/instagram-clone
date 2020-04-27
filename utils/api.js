import axios from 'axios'

export const fetchImages = async () => {
    try {
        const response = await axios.get(`https://picsum.photos/v2/list`)
        const { data }  = response
         return data
      } catch (error) {
        console.error(error)
      }
}

export const getImageFromId = async id => {
    try {
        const response = await axios.get(`https://picsum.photos/${id}/237/200/300`)
        const { data } = response
        return data
    }catch(e) {
        console.log(e)
    }
}

// https://picsum.photos/id/237/200/300