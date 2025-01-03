const { defaults } = require('jest-config');

module.exports = {
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                tsconfig: "./../tsconfig.json", // Путь к tsconfig.json остаётся как был
            },
        ],
        "^.+\\.(js|jsx|ts|tsx)$": [
            "esbuild-jest", // Используем esbuild для трансформации JS/TS файлов
            {
                babel: {
                    presets: ["@babel/preset-env", "@babel/preset-react"], // Если используете React
                },
            },
        ],
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["../setupTests.ts"], // Путь к setupTests.ts остаётся как был
};
