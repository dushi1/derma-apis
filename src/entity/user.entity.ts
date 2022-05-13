import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";
import { Drink } from "./drink.entity";
import { Education } from "./education.entity";
import { Gender } from "./gender.entity";
import { HighestEdu } from "./highestEdu.entity";
import { Marital } from "./marital.entity";
import { Privacy } from "./privacy.entity";
import { Profession } from "./profession.entity";
import { Religion } from "./religion.entity";
import { Smoke } from "./smoke.entity";

@Entity("user", { orderBy: { id: "ASC" } })
export class User extends DateTimeEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ unique: true })
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

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => Privacy)
  @JoinColumn()
  privacy: Privacy;

  @OneToOne(() => Religion)
  @JoinColumn()
  religion: Religion;

  @OneToOne(() => Drink)
  @JoinColumn()
  drink: Drink;

  @OneToOne(() => Education)
  @JoinColumn()
  education: Education;

  @OneToOne(() => Gender)
  @JoinColumn()
  gender: Gender;

  @OneToOne(() => HighestEdu)
  @JoinColumn()
  highestEdu: HighestEdu;

  @OneToOne(() => Marital)
  @JoinColumn()
  marital: Marital;

  @OneToOne(() => Profession)
  @JoinColumn()
  profession: Profession;

  @OneToOne(() => Smoke)
  @JoinColumn()
  smoke: Smoke;
}
