declare class ProcessOutValidationError extends Error {
    code: string;
    constructor(code: string, message: string);
}
export = ProcessOutValidationError;
