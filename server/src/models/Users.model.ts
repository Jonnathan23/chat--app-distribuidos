import {Table, Column, Model ,DataType, PrimaryKey} from 'sequelize-typescript'


@Table({
    tableName: 'Users'
})

class Users extends Model {
    
    @PrimaryKey
    @Column ({
        type: DataType.INTEGER
    })
    id!: number

    @Column({
        type: DataType.STRING(150)
    })
    name!: string    
}

export default Users