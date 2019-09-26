module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DATABASE_URL || "postgresql://postgres@localhost/meal-planner",
    TEST_DB_URL: process.env.TEST_DATABASE_URL || "postgresql://postgres@localhost/meal-planner-test",
    JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
    JWT_EXPIRY: process.env.JWT_EXPIRY || '3h',
}