import nodemailer from 'nodemailer';

export const saveSentEmail = async (req : any, res:any) =>{
    try{
        // Create a transporter using SMTP transport
        const body = req.body;
        
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'dalmik081219998@gmail.com',
                pass: 'agav pqfn dtkl wafz',
            }
        });

        // Email data
        const mailOptions = {
            from: body.from,
            to: body.to,
            subject: body.subject,
            text: body.text,
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
        });

    } catch(error:any) {
        res.status(500).json(error.message);
    }

}