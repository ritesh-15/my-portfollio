class ApiHttpError {
  status: number;
  message: string;
  error: string;

  constructor(status: number, message: string, error: string) {
    this.status = status;
    this.message = message;
    this.error = error;
  }

  static badRequest(message: string = "Bad request!") {
    return new ApiHttpError(400, message, "Bad request!");
  }

  static toManyRequest(message: string = "Too many request!") {
    return new ApiHttpError(429, message, "Too many request!");
  }

  static unauthorized(message: string = "Unauthorized!") {
    return new ApiHttpError(401, message, "Unauthorized!");
  }

  static forbidden(message: string = "Forbidden!") {
    return new ApiHttpError(403, message, "Forbidden!");
  }

  static notFound(message: string = "Not found!") {
    return new ApiHttpError(404, message, "Not found!");
  }

  static internalServerError(message: string = "Internal server error!") {
    return new ApiHttpError(
      500,
      message,
      "Something went wrong at our side, please try again later!"
    );
  }

  static notImplemented(message: string = "Not implemented!") {
    return new ApiHttpError(501, message, "Not implemented!");
  }

  static unprocessableEntity(message: string = "Unprocessable entity!") {
    return new ApiHttpError(422, message, "Unprocessable entity!");
  }
}

export default ApiHttpError;
