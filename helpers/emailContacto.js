import nodemailer from "nodemailer"

const emailRegistro = async (datos) => {

    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port:  process.env.EMAIL_PORT,
      auth: {
        user:  process.env.EMAIL_USER,
        pass:  process.env.EMAIL_PASS,
      }
    });

      const { nombre, fono, correo, asunto, mensaje} = datos

      const info = transport.sendMail({
        from : "London Bridge",
        to: 'londonbridge.contacto@gmail.com', //londonbridge.contacto@gmail.com
        subject : "Contacto Pagina Web",
        text : `Se envia el siguiente formulario de contacto a traves de la pagina web:
        
        Nombre: ${nombre} 
        Correo: ${correo}
        Fono: ${fono}
        Mensaje: ${mensaje}
        `,   
    
      })

      console.log("Mensaje Enviado")
    
    
}



export default emailRegistro