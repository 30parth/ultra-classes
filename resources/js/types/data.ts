export type StudentType = {
    id: number,
    user_id: number,
    name: string,
    dob: string,
    gender: 'male' | 'female' | 'other',
    address: string,
    admission_date: string,
    status: 'active' | 'inactive',
    photo_path: string,
}