import dotenv from 'dotenv';

dotenv.config();

interface ENV {
    Mail_Address: string
    Mail_Password: string
    DB_URI: string
}


const env: ENV = {
    Mail_Address: process.env.MAIL_ADDRESS || "",
    Mail_Password: process.env.MAIL_PASSWORD || "",
    DB_URI: process.env.DB_URI || "",
}

export default env