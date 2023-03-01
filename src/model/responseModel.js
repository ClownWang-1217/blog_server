class BaseResponseModel {
    constructor(data, message) {
        if (data) {
            this.data = data;
        }
        if (message) {
            this.message = message;
        }

    }
    
}

class SuccessModel extends BaseResponseModel {
    constructor(data, message) {
        super(data, message);
        this.errno = 0;
    }
}

class FailModel extends BaseResponseModel {
    constructor(data, message) {
        super(data, message);
        this.errno = -1;
    }
}

module.exports = {
    SuccessModel,
    FailModel
}

