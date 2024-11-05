// models/User.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'Users',
  schema: 'my_custom_schema',
  timestamps: false
})
class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column(DataType.STRING)
  name!: string;
}

export default User