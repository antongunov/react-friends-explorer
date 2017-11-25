import idb from 'idb';

const DB_NAME = 'friends-explorer';
const DB_VERSION = 1;
const DB_STORE = 'friends';
const DB_KEY = 'id';

const dbPromise = idb.open(DB_NAME, DB_VERSION, upgradeDB => {
  upgradeDB.createObjectStore(DB_STORE, { keyPath: DB_KEY });
});

const count = () => dbPromise
  .then(db => db.transaction(DB_STORE, 'readonly').objectStore(DB_STORE).count());

const load = (url) => fetch(url)
  .then(response => response.json())
  .then(data => dbPromise
    .then(db => {
      const tx = db.transaction(DB_STORE, 'readwrite');
      const store = tx.objectStore(DB_STORE);
      data.forEach(item => store.add(item));
      return tx.complete;
    })
  );

const person = (id) => dbPromise
  .then(db => db.transaction(DB_STORE, 'readonly').objectStore(DB_STORE).get(id));

export default {
  count,
  load,
  person,
};
