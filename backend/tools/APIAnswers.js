

const apiAnswer = new class {

    OK = this.createAnswer(null);
    INVALID_DATA = (errors) => {return this.createError("INVALID_DATA",errors = errors);}
    UNAUTHORIZED = this.createError("USER_UNAUTHORIZED");
    FORBIDDEN = this.createError("FORBIDDEN_ACTION");
    WRONG_CREDS = this.createError("WRONG_CREDS");
    WRONG_PIN = this.createError("WRONG_PIN");
    EXPIRED = this.createError("EXPIRED");
    NOT_FOUND = this.createError("NOT_FOUND");

    createAnswer(data,code = "OK") {
        let answer = {
            error: false,
            code: code
        };
        if(data) {
            answer.data = data;
        }
        return answer;
    }

    createError(code = "UNKNOWN_ERROR",errors = null) {
        let answer = {
            error: true,
            code: code
        };
        if(errors) {
            answer.errors = errors;
        }
        return answer;
    }
}

module.exports = apiAnswer;