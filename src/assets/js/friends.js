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

const search = ({searchText, gender, friends}, offset = 0, limit = 100) => dbPromise
  .then(db => {
    const tx = db.transaction(DB_STORE, 'readonly');
    const store = tx.objectStore(DB_STORE);

    const items = [];
    let total = 0;

    const searchTextLowerCase = searchText.toLowerCase();

    store.openCursor()
      .then(cursor => offset > 0 ? cursor.advance(offset) : Promise.resolve(cursor))
      .then(function cursorIterate(cursor) {
        if (!cursor) return;

        const item = cursor.value;
        if (
          item.name.toLowerCase().indexOf(searchTextLowerCase) >= 0
          && (gender === 'not-specified' || gender === item.gender)
          && (!friends || !(friends.length > 0) || friends.includes(item.id))
        ) {
          if (items.length <= limit) items.push(cursor.value);
          total++;
        }

        return cursor.continue().then(cursorIterate);
      });

    return tx.complete.then(() => ({items, total}));
  });

export default {
  count,
  load,
  person,
  search,
};
