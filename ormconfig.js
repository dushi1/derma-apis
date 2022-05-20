module.exports = {
    "type": "mysql",
    "host": process.env.DB_HOST || "localhost",
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "Tiger123@",
    "database": process.env.DB_DATABASE || "test",
    "charset": "utf8",
    "synchronize": true,
    "logging": true,
    "entities": [
        "**/**.entity.ts"
    ],
    "migrations": [
        "**/**.migrations.ts"
    ],
    "cli": {
        "migrationsDir": "migration"
    },
    "connectTimeout": 30000,
    "acquireTimeout": 30000
}