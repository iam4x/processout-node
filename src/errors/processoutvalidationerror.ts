class ProcessOutValidationError extends Error {
    public code: string;
    
    constructor(code: string, message: string) {
        super(message);
        this.code = code;

        this.name = "ProcessOutValidationError";
    }
}
export = ProcessOutValidationError;
