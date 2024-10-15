import dotenv from 'dotenv';

dotenv.config();

interface ENV {
    Mail_Address: string
    Mail_Password: string
    DB_URI: string
    ALLOWED_ORIGIN: string
}


const env: ENV = {
    Mail_Address: process.env.MAIL_ADDRESS || "",
    Mail_Password: process.env.MAIL_PASSWORD || "",
    DB_URI: process.env.DB_URI || "",
    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || "",
}

export default env