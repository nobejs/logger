const logsRepo = requireRepo("logs");
const validator = requireValidator();
const pickKeysFromObject = requireUtil("pickKeysFromObject");

const prepare = async ({ job }) => {
  try {
    const payload = pickKeysFromObject(job, [
      "service",
      "timestamp",
      "status_code",
      "http_method",
      "url",
      "hostname",
      "protocol",
      "source",
      "request_post_body",
      "response_body",
      "meta",
    ]);

    return payload;
  } catch (error) {}
};

const authorize = async ({ prepareResult }) => {
  return true;
};

const validateInput = async (payload) => {
  const constraints = {
    service: {
      presence: true,
    },
    timestamp: {
      presence: true,
    },
    status_code: {
      presence: true,
    },
    http_method: {
      presence: true,
    },
    url: {
      presence: true,
    },
  };

  return validator(payload, constraints);
};

const handle = async ({ prepareResult, authorizeResult }) => {
  try {
    await validateInput(prepareResult);
    await logsRepo.create(prepareResult);
    return {};
  } catch (error) {
    throw error;
  }
};

const respond = async ({ handleResult }) => {
  try {
    return handleResult;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  prepare,
  authorize,
  handle,
  respond,
};
