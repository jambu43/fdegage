'use server'
import {create } from "@/actions/strapi/client"




export const createPetition = async (prevState: any, formData: FormData) => {
    const data = Object.fromEntries(formData)
    const isPhoneNumber = /^[0-9]{10}$/.test(data?.phoneOrEmail as string);
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data?.phoneOrEmail as string);

    const request = {
        prenom : data?.prenom as string,
        nom : data?.nom as string,
        telephone: isPhoneNumber ? data?.phoneOrEmail as string : "",
        email: isEmail? data?.phoneOrEmail as string : "no@email.com",
        pays: data?.pays as string,
        ville: data?.ville as string,
        accept_to_show_progress : data?.accept_to_show_progress === 'on'? true : false,
        accept_to_show_my_name: data?.accept_to_show_my_name === 'on'? true : false,
    }
     const res = await create("petitions", request)
     if(!res){
        return {
            success: false,
            message: "Une erreur est survenue"
        }
     }
     return {
        success: true,
        message: "Votre pétition a été créée avec succès"
    }
}