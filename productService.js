import axios from 'axios'

const getAll = async () => {
 const res = await axios.get('https://fakestoreapi.com/products')
 return res.data
}
    
export defult {
    getAll
}
    
