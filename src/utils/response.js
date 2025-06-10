const createSuccessResponse = (data) => {
  return {
    status: 'success',
    data: data,
  };
};

const createErrorResponse = (statusCode, message) => {
  return {
    status: 'error',
    error: {
      code: statusCode,
      message: message,
    },
  };
};

module.exports = {
  createSuccessResponse,
  createErrorResponse,
};