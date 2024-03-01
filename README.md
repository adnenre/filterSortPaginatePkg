<h1 style="text-align: center;">Typescript TDD</h1>

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=adnenre_Typescript-TDD&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=adnenre_Typescript-TDD) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=adnenre_Typescript-TDD&metric=coverage)](https://sonarcloud.io/summary/new_code?id=adnenre_Typescript-TDD) [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=adnenre_Typescript-TDD&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=adnenre_Typescript-TDD) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=adnenre_Typescript-TDD&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=adnenre_Typescript-TDD) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=adnenre_Typescript-TDD&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=adnenre_Typescript-TDD) [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=adnenre_Typescript-TDD&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=adnenre_Typescript-TDD) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=adnenre_Typescript-TDD&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=adnenre_Typescript-TDD) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=adnenre_Typescript-TDD&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=adnenre_Typescript-TDD)

# Test-Driven Development (TDD) with Typescript

Welcome to our project! In this README, we'll introduce you to Test-Driven Development (TDD) and explain how it plays a crucial role in our development process.

## What is Test-Driven Development (TDD)?

Test-Driven Development (TDD) is a software development approach where developers write tests for their code before writing the actual implementation. The TDD cycle typically consists of three steps: "red," "green," and "refactor."

1. **Red**: In the "red" phase, developers write a failing test case that describes the desired behavior of the code. This test will fail initially because there is no implementation to satisfy it.

2. **Green**: In the "green" phase, developers write the minimum amount of code necessary to make the failing test pass. The goal is to write code that satisfies the requirements of the test.

3. **Refactor**: In the "refactor" phase, developers refactor the code to improve its design, readability, and performance while ensuring that all tests continue to pass. This step helps maintain clean and maintainable code.

## Why Use Test-Driven Development?

Test-Driven Development offers several benefits to developers and teams:

- **Improved Code Quality**: TDD encourages developers to focus on writing clean, modular, and testable code from the outset, leading to higher-quality software.

- **Faster Feedback Loops**: TDD provides rapid feedback on code changes by running tests automatically. This allows developers to catch and fix issues early in the development process.

- **Regression Prevention**: With a comprehensive suite of tests in place, developers can refactor code confidently without worrying about introducing new bugs.

- **Better Documentation**: Test cases serve as living documentation that describes the behavior of the code. This makes it easier for new developers to understand the system and for existing developers to maintain and extend it.

## Getting Started with TDD

To get started with Test-Driven Development in our project, follow these steps:

1. **Write a Failing Test**: Begin by writing a test case that describes the desired behavior of the code. Run the test to ensure that it fails as expected.

2. **Write the Minimum Code**: Write the minimum amount of code necessary to make the failing test pass. Focus on implementing just enough functionality to satisfy the requirements of the test.

3. **Refactor**: Once the test passes, refactor the code to improve its design, readability, and performance while ensuring that all tests continue to pass.

4. **Repeat**: Continue this cycle for each new feature or change, writing failing tests, implementing code, and refactoring as needed.

By following the principles of Test-Driven Development, we aim to deliver high-quality software that meets the needs of our users while maintaining a robust and maintainable codebase.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install and how to install them:

- Node.js (version X.X.X)
- npm or yarn

### Installing

A step-by-step series of examples that tell you how to get a development environment running.

1. Clone the repository:

   ```bash
   git clone https://github.com/adnenre/Typescript-TDD
   ```

2. Change directory to the project directory:

   ```bash
   cd TYPESCRIPT-tdd
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## Running the tests

Explain how to run the automated tests for this system.

```bash
npm test
```

[Documentation](https://adnenre.github.io/Typescript-TDD/docs)

[SonarCloud](https://sonarcloud.io/summary/new_code?id=adnenre_Typescript-TDD)

## usage

```js
import { U } from "typescript-tdd";
    let max = 1000;
    let min = 1;

    // math utils
    let randomNumber = U.math.RandomRange({ min, max });    //  return number between min and max

    // string utlis
    let capitalized =  let a = U.Str.capitalize('hello world'); // Hello World


     // array utlis
    const items = [1, 2, 3];
    const myInstance = new U.Arr(...items);
    console.log(myInstance.getItems())                            // Output : [1, 2, 3]

```

## Author

Adnen Rebai
