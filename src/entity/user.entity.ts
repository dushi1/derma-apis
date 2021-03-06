import { Column, Entity, PrimaryColumn } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";

@Entity("user")
export class User extends DateTimeEntity {
  @PrimaryColumn({ unique: true })
  uid: string;

  @Column({ nullable: true })
  name: string;

  @Column({ unique: true, nullable: true })
  fbUrl: string;

  @Column({ unique: true, nullable: true })
  number: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true })
  dob: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  skin: string;

  @Column({ nullable: true })
  privacy: string;

  @Column({ type: 'text', nullable: true })
  interest: string;

  @Column({ nullable: true })
  religion: string;

  @Column({ nullable: true })
  children: string;

  @Column({ nullable: true })
  diet: string;

  @Column({ nullable: true })
  drink: string;

  @Column({ nullable: true })
  education: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  highestEdu: string;

  @Column({ nullable: true })
  marital: string;

  @Column({ nullable: true })
  profession: string;

  @Column({ nullable: true })
  smoke: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  city: string;

  @Column({ default: false })
  firstForm: boolean;

  @Column({ default: false })
  secondForm: boolean;

  @Column({ default: true })
  isActive: boolean;
}
