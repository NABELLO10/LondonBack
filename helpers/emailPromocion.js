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

      const { fono } = datos

      const info = transport.sendMail({
        from : "London Bridge",
        to: 'londonbridge.contacto@gmail.com', //londonbridge.contacto@gmail.com
        subject : "Contacto Promoción",
        text : `El siguiente telefono desea que lo contacten para la promoción valida:
                
        Fono: ${fono}
        
        `,   
    
      })

      console.log("Mensaje promocion Enviado")
    
    
}



export default emailRegistro