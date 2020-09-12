import { openDB } from 'idb';
import CONFIG from '../utils/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavResto = {
  async getResto(id) {
    if (!id) {
      return false;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestoes() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putResto(resto) {
    if (resto.id === null) {
      return false;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, resto);
  },
  async deleteResto(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavResto;
