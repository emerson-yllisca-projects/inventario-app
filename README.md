# Inventario App Back
 
## Migraciones
#
    npx sequelize-cli db:migrate
#### Crear migraciones Example
    npx sequelize-cli model:generate --name User --attributes firstName:string

## Sedders
#
    npx sequelize-cli db:seed:all

### Crear Sedders
    npx sequelize-cli seed:generate --name demo-user

