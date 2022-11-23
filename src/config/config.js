import dotenv from 'dotenv';
dotenv.config();

export default {
    
    HOST: process.env.HOST       || 'localhost',
    PORT: process.env.PORT       || 3000,
    API_URL: process.env.API_URL || '/api/v1',
    
    //FIC: SECURITY MODULE
    CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000',
    DATABASE_SECURITY: process.env.DATABASE_SECURITY || 'db_default_security', 
    CLUSTER_SECURITY_SHARE: process.env.CLUSTER_SECURITY_SHARE || 'db_default_cluster_security_share',

    //FIC: EDUCATION MODULE
    CONNECTION_STRING2: process.env.CONNECTION_STRING2 || 'mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000',
    DATABASE_EDUCATION: process.env.DATABASE_EDUCATION || 'db_default_education',
    CLUSTER_EDUCATION: process.env.CLUSTER_EDUCATION   || 'db_default_cluster_education',
    CLUSTER_SECURITY_EDUCATION: process.env.CLUSTER_SECURITY_EDUCATION || 'db_default_cluster_security_education',

    //FIC: ECOMMERCE MODULE
    CONNECTION_STRING3: process.env.CONNECTION_STRING3 || 'mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000',
    DATABASE_COMMERCE: process.env.DATABASE_COMMERCE   || 'db_default_commerce',
    CLUSTER_COMMERCE: process.env.CLUSTER_COMMERCE     || 'db_default_cluster_commerce',
    CLUSTER_SECURITY_COMMERCE: process.env.CLUSTER_SECURITY_COMMERCE || 'db_default_cluster_security_commerce',

    //FIC: General Varibales
    DB_USER: process.env.DB_USER         || 'admin', 
    DB_PASSWORD: process.env.DB_PASSWORD || 'admin',
    ACTIVE_SECURITY_MODULE: process.env.ACTIVE_SECURITY_MODULE || 'defaul_security_module',
}


