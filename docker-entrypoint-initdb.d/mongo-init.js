db = db.getSiblingDB('linkapi')
db.createUser({
  user: 'root',
  pwd: 'root',
  roles: [{ role: 'readWrite', db: 'linkapi' }],
})
