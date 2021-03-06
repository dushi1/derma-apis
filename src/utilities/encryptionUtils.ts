import application from '../constants/application';
import jwt from 'jsonwebtoken';

const signUid = (value: string) => {
    return jwt.sign({ uid: value }, process.env.JWTSECRET || 'secret');
};

const verifyUid = async (token: string): Promise<any> =>
    new Promise(resolve => {
        jwt.verify(
            token,
            process.env.JWTSECRET || 'secret',
            (err, decoded) => {
                if (err) {
                    console.log(err);
                    resolve(null);
                } else {
                    resolve(decoded);
                }
            },
        );
    });


export { signUid, verifyUid }