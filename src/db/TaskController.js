import Dexie from 'dexie';

const db = new Dexie('Tasks')

db.version(2).stores({
    users: '++id, username, password',
    projects: '++id, name, goals',
    tasks: '++id, name, tag, description, state, points'
})

export default db

