'use server'
import { find } from "../client"

export const numberOfPetitions = async () => {
    const res = await find('petitions')
    return res?.meta.pagination.total
}