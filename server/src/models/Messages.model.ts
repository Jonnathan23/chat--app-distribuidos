import {Table, Column, Model ,DataType, PrimaryKey} from 'sequelize-typescript'


@Table({
    tableName: 'Messages'
})

class Messages extends Model {
    
    @PrimaryKey
    @Column ({
        type: DataType.INTEGER
    })
    id!: number

    @Column({
        type: DataType.STRING(150)
    })
    content!: string

    @Column({
        type:DataType.STRING(150)
    })
    Owner!: string
}

export default Messages