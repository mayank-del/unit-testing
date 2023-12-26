module.exports = {
    // other Jest configurations...
  
    testResultsProcessor: 'jest-junit',
    reporters: ['default', 'jest-junit'],
    testResultsProcessor: 'jest-junit',
    coverageReporters: ['cobertura', 'text', 'lcov'],
  };