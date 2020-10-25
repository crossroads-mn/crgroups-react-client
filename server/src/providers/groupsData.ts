import * as fs from 'fs';
import * as path from 'path';
import { ConfigProvider as Config } from '../config';
import { abort } from 'process';

const mysql = require('mysql');

export function getActiveGroups(config: Config) : Promise<any> {

    const ca_file = path.join(__dirname, config.get('azure_mysql_cert') as string);

    if (!fs.existsSync(ca_file)) {
        abort();
    }

    const connection = mysql.createConnection({
        host:   config.get("GROUP_DATABASE_HOST"),
        user:   config.get("GROUP_DATABASE_USER"),
        password:   config.get("GROUP_DATABASE_PASS"),
        database:   config.get("GROUP_DATABASE_SCHEMA"),
        ssl: {
            ca: fs.readFileSync(ca_file) 
        } 
    });

    const query = "SELECT GUID, TITLE, TARGET_AUDIENCE, MEET_DAY, MEET_TIME_START, DURATION, LEADER, PHONE_NUMBER, EMAIL, LOCATION, CAMPUS, GROUP_LINK, CATEGORY, GROUP_TYPE, CARE_PROVIDED, COST, ACTIVE, TRIM(DESCRIPTION) as DESCRIPTION FROM SMALL_GROUPS WHERE ACTIVE=1 LIMIT 999";
    connection.connect();

    return new Promise<any>((resolve, reject) => {
        connection.query(query, function (error:any, results: any, fields:any) {
            if (error) {
                reject(error);
            };

            connection.end();
            resolve(results);
        });    
    });
}