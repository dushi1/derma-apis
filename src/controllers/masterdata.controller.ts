// import { AppDataSource } from "../index";
import { Request, Response } from "express";
import { Drink } from "../entity/drink.entity";
import { Education } from "../entity/education.entity";
import { HighestEdu } from "../entity/highestEdu.entity";
import { Marital } from "../entity/marital.entity";
import { Children } from "../entity/children.entity";
import { Diet } from "../entity/diet.entity";
import { Gender } from "../entity/gender.entity";
import { Privacy } from "../entity/privacy.entity";
import { Religion } from "../entity/religion.entity";
import { Skin } from "../entity/skin.entity";
import { Smoke } from "../entity/smoke.entity";
import { Interest } from "../entity/interest.entity";
import { Profession } from "../entity/profession.entity";
import { getConnection } from "typeorm";


const MasterDataRouteController = async (req: Request, res: Response) => {
    const drink = await getConnection()
        .getRepository(Drink)
        .createQueryBuilder("drink")
        .getMany()
    const drinkArray = drink.map(data => {
        return { value: data.label, label: data.label }
    })

    const education = await getConnection()
        .getRepository(Education)
        .createQueryBuilder("education")
        .getMany()
    const educationArray = education.map(data => {
        return { value: data.label, label: data.label }
    })

    const highestEducation = await getConnection()
        .getRepository(HighestEdu)
        .createQueryBuilder("highestEdu")
        .getMany()
    const highestEducationArray = highestEducation.map(data => {
        return { value: data.label, label: data.label }
    })

    const maritalStatus = await getConnection()
        .getRepository(Marital)
        .createQueryBuilder("marital")
        .getMany()
    const maritalStatusArray = maritalStatus.map(data => {
        return { value: data.label, label: data.label }
    })

    const children = await getConnection()
        .getRepository(Children)
        .createQueryBuilder("children")
        .getMany()
    const childrenArray = children.map(data => {
        return { value: data.label, label: data.label }
    })

    const diet = await getConnection()
        .getRepository(Diet)
        .createQueryBuilder("diet")
        .getMany()
    const dietArray = diet.map(data => {
        return { value: data.label, label: data.label }
    })

    const gender = await getConnection()
        .getRepository(Gender)
        .createQueryBuilder("gender")
        .getMany()
    const genderArray = gender.map(data => {
        return { value: data.label, label: data.label }
    })

    const privacy = await getConnection()
        .getRepository(Privacy)
        .createQueryBuilder("privacy")
        .getMany()
    const privacyArray = privacy.map(data => {
        return { value: data.label, label: data.label }
    })

    const religion = await getConnection()
        .getRepository(Religion)
        .createQueryBuilder("religion")
        .getMany()
    const religionArray = religion.map(data => {
        return { value: data.label, label: data.label }
    })

    const skin = await getConnection()
        .getRepository(Skin)
        .createQueryBuilder("skin")
        .getMany()
    const skinArray = skin.map(data => {
        return { value: data.label, label: data.label }
    })

    const smoke = await getConnection()
        .getRepository(Smoke)
        .createQueryBuilder("smoke")
        .getMany()
    const smokeArray = smoke.map(data => {
        return { value: data.label, label: data.label }
    })

    const interest = await getConnection()
        .getRepository(Interest)
        .createQueryBuilder("interest")
        .getMany()
    const interestArray = interest.map(data => {
        return data.label
    })

    const profession = await getConnection()
        .getRepository(Profession)
        .createQueryBuilder("profession")
        .getMany()

    const obj = {}

    profession.forEach(data => {
        //@ts-ignore
        obj[data.label] = data.value.split(',')
    })


    res.json({
        drink: drinkArray,
        education: educationArray,
        highestEducation: highestEducationArray,
        maritalStatus: maritalStatusArray,
        children: childrenArray,
        diet: dietArray,
        gender: genderArray,
        privacy: privacyArray,
        religion: religionArray,
        skin: skinArray,
        smoke: smokeArray,
        interest: interestArray,
        profession: obj
    })
};

export { MasterDataRouteController };