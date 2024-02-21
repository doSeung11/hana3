interface Naver {
    userid: number;
    username: string;
    email: string;
}

interface Kakao {
    userid: number;
    userName: string;
    kakaotalk: string;
    email: string;
}

// Solution 1
interface SnsUser {
    [idx:string]: number|string;
    userid: number;
    email: string;
}

// Solution 2
// interface SnsUser {
//     userid: number;
//     username?: string;
//     userName?: string;
//     kakaotalk?: string;
//     email: string;
// }

// Solution 3
// interface SnsUser extends Partial<Naver>, Partial<Kakao> {
//     userid: number;
//     email: string;
// }

const naverUser: SnsUser = {userid: 1, username: 'HH', email: 'abc@naver.com'};
const kakoUser: SnsUser = {userid: 1, userName: 'HH', kakaotalk: 'HH', email: 'abc@hanmail.net'};