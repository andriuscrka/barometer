module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest'
    },
    testMatch: ['**/?(*.)+(test).ts?(x)'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
    }
};