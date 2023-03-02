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
        this.code = 200;
    }
}

class FailModel extends BaseResponseModel {
    constructor(data, message) {
        super(data, message);
        this.code = -1;
    }
}

module.exports = {
    SuccessModel,
    FailModel
}

