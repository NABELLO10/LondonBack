import emailContacto from "../helpers/emailContacto.js"
import emailPromocion from "../helpers/emailPromocion.js"

const contacto = async (req,res) => {          
    const { nombre, fono, correo, asunto, mensaje} = req.body

    try {                 
        emailContacto({
            nombre, fono, correo, asunto, mensaje
        }) 

       res.status(200).json({msg: "Mensaje enviado, pronto nos comincaremos contigo!"})

    } catch (error) {
        console.log(error)            
    }      
}
const promocion = async (req,res) => {          
    const {fono} = req.body

    try {                 
        emailPromocion({
            fono
        }) 

       res.status(200).json({msg: "Mensaje enviado, pronto nos comincaremos contigo!"})

    } catch (error) {
        console.log(error)            
    }      
}





//EXPORTAR --------------------------------------------------------------------------------------------------------------------//
export {
    contacto,
    promocion

}