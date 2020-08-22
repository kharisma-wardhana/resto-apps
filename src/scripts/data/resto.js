import dummyData from './../../DATA.json';
import API_ENDPOINT from '../utils/api';

class RestoData {
  static getAllData() {
    return dummyData;
  }

  static async getAllDataAPI() {
    const res = await fetch(API_ENDPOINT.LIST);
    const resJSON = await res.json();
    console.log(resJSON);
    const listResto = resJSON.restaurants;
    return listResto;
  }

  static async detailResto(id) {
    const res = await fetch(API_ENDPOINT.DETAIL(id));
    const resJSON = await res.json();
    console.log(resJSON);
    return resJSON;
  }
}

export default RestoData;
