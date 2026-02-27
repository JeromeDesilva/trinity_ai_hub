import dotenv from 'dotenv';
dotenv.config();

import app from './app';

const PORT = process.env.PORT || 8080;

app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`✅ Trinity Backend running on 0.0.0.0:${PORT}`);
    console.log(`   NODE_ENV: ${process.env.NODE_ENV || 'development'}`);
});
