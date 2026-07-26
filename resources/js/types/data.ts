export type StudentType = {
    id : number,
    user_id : number,
    name : string,
    dob : string,
    gender : 'male' | 'female' | 'other',
    guardian_name : string,
    guardian_contact : number,
    address : string,
    admission_date : string,
    status : 0 | 1,
    photo_path : string,
}