import { Column, Entity, PrimaryColumn } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";

@Entity("user")
export class User extends DateTimeEntity {
  @PrimaryColumn({ unique: true })
  uid: number;

  @Column()
  name: string;

  @Column({ unique: true })
  fbUrl: string;

  @Column({ unique: true })
  number: string;

  @Column()
  numberVerified: boolean;

  @Column({ unique: true })
  email: string;

  @Column()
  dob: Date;

  @Column()
  privacy: string;

  @Column()
  religion: string;

  @Column()
  drink: string;

  @Column()
  education: string;

  @Column()
  gender: string;

  @Column()
  highestEdu: string;

  @Column()
  marital: string;

  @Column()
  profession: string;

  @Column()
  smoke: string;

  @Column({ default: true })
  isActive: boolean;
}
