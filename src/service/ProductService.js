import axios from 'axios';
import { constant } from '../helper/constant';

export default class ProductService {


    static async postProduct(url, data) {
        return await axios.post(constant.productGetUrl,
            {
                ...data
            })
    }
}