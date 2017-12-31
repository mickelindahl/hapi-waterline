/**
 * Created by Pencroff on 05.01.2015.
 */

module.exports = {
    primaryKey:'id',
    identity: 'pet',
    datastore: 'flat',
    attributes: {
        id: { type: 'number', autoMigrations: { autoIncrement: true } },
        name: {type: 'string'},
        breed: {type: 'string'}
    }
};