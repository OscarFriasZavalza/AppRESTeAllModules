import mongoose from 'mongoose'; 
import config from './config'; 


export const dbSecurityConnection = async () => {
    try { 
                
        const DBeSecurity = await mongoose.connect(config.CONNECTION_STRING, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            dbName: config.DATABASE
        }); 
        //console.log('Database is connected to: ', DBeSecurity.connection.name); 
    } catch (error) { 
        console.log('Error: ', error); 
    } 
}

/* export const dbEducationConnection = () => {
    try { 
        console.log('FIC: DB2 ', config.DATABASE2); 

        let DBeEducation = mongoose.createConnection(config.CONNECTION_STRING2, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }); 
        DBeEducation.useDb(config.DATABASE2);
        console.log('Database2 is connected to: ', DBeEducation);
    } catch (error) { 
        console.log('Error: ', error); 
    } 
} */

/* (async () => { 
    try { 
        const DBeSecurity = await mongoose.connect(config.CONNECTION_STRING, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            dbName: config.DATABASE 
        }); 
        console.log('Database is connected to: ', DBeSecurity.connection.name); 
        console.log('FIC: DB2 ', config.DATABASE2); 
        const DBeEducation = await mongooseEducation.connect(config.CONNECTION_STRING, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            dbName: config.DATABASE2 
        }); 
        console.log('Database is connected to: ', DBeEducation.connection.name);
    } catch (error) { 
        console.log('Error: ', error); 
    } 
})(); */