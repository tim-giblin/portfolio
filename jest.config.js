var jestConfig = {
    transform: {
        '.(ts|tsx|svg|html)$': 'ts-jest',
    },
    transformIgnorePatterns: ['^.+\\.(js|json)$'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'svg'],
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '(tests/.*.mock).(jsx?|tsx?)$',
        '/dist/',
    ],
    verbose: true,
};

var packageName = require('./package.json').name;

var display = {
    name: packageName,
    displayName: packageName,
};

var angularConfig = {
    preset: 'jest-preset-angular',
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
        },
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
    transformIgnorePatterns: ['node_modules/(?!(three))'],
    coverageThreshold: {
        global: {
            branches: 5,
            functions: 5,
            lines: 5,
            statements: 5,
        },
    },
};


module.exports = Object.assign({}, jestConfig, angularConfig, display);