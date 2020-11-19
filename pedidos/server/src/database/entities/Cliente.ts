import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'clientes' })
class Cliente {
  @PrimaryGeneratedColumn('increment', { type: 'integer' })
  id: number;

  @Column()
  nome: string;

  @Column()
  salario: number;

  @Column()
  data_nascimento: Date;

  @Column()
  ativo: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Cliente;
