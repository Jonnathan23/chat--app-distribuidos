// models/Message.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'Messages',
  schema: 'my_custom_schema',
})
export class Message extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column(DataType.STRING)
  contenido!: string;

  @Column(DataType.STRING)
  autor!: string;
}

export default Message