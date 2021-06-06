import Dexie from 'dexie';
import relationships from 'dexie-relationships'

const db = new Dexie('Projects', {addons: [relationships]})

db.version(3).stores({
    projects: '++id, name, goals',
    tasks: '++id, name, tag, description, state, points, projectId -> projects.id'
})

export default db

