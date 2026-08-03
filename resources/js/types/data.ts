export type StudentType = {
    id: number,
    user_id: number,
    name: string,
    dob: string,
    gender: 'male' | 'female' | 'other',
    address: string,
    admission_date: string,
    status: string,
    photo_path: string,
}

export type BatchType = {
    id: number,
    name: string,
    start_date: string,
    end_date: string,
    status: string,
}   