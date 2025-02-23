'use server'


const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337"


export const find = async (collection: string, params: Record<string, string> = {}) => {
    try {
        const url = new URL(`${STRAPI_URL}/api/${collection}`)
        url.search = new URLSearchParams(params).toString()
        const res = await fetch(url.toString())
        const data = await res.json()
        return data
    } catch (error) {
        console.error('Error in find function:', error)
        throw error
    }
}


export const findOne = async (collection: string, id: string) => {
    try {
        const res = await fetch(`${STRAPI_URL}/api/${collection}/${id}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.error('Error in findOne function:', error)
        throw error
    }
}

export const create = async (collection: string, data: Record<string, any>) => {
    try {
        const res = await fetch(`${STRAPI_URL}/api/${collection}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({data}),
        })
        const result = await res.json()
          
        return result 
    }
    catch (error) {
        console.error('Error in create function:', error)
        throw error
    }
}
