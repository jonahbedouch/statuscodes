export interface StatusCode {
  status: number;
  statusText: string;
  message?: string;
}

/** An interim response. Indicates to the client that the initial part of the request has been received and has not yet been rejected by the server. The client SHOULD continue by sending the remainder of the request or, if the request has already been completed, ignore this response. The server MUST send a final response after the request has been completed. */
export const STATUS_100_CONTINUE: StatusCode = {
  status: 100,
  statusText: "Continue",
};

/** Sent in response to an Upgrade request header from the client, and indicates the protocol the server is switching to. */
export const STATUS_101_SWITCHING_PROTOCOL: StatusCode = {
  status: 101,
  statusText: "Switching Protocol",
};

/** Indicates that the server has received and is processing the request, but no response is available yet. */
export const STATUS_102_PROCESSING: StatusCode = {
  status: 102,
  statusText: "Processing (WebDav)",
};

/** Primarily intended to be used with the `Link` header. It suggests the user agent start preloading the resources while the server prepares a final response. */
export const STATUS_103_EARLY_HINTS: StatusCode = {
  status: 103,
  statusText: "Early Hints",
};

/** Indicates that the request has succeeded. */
export const STATUS_200_OK: StatusCode = {
  status: 200,
  statusText: "OK",
};

/** Indicates that the request has succeeded and a new resource has been created as a result. */
export const STATUS_201_CREATED: StatusCode = {
  status: 201,
  statusText: "Created",
};

/** Indicates that the request has been received but not completed yet. It is typically used in log running requests and batch processing. */
export const STATUS_202_ACCEPTED: StatusCode = {
  status: 202,
  statusText: "Accepted",
};

/** Indicates that the returned metainformation in the entity-header is not the definitive set as available from the origin server, but is gathered from a local or a third-party copy. The set presented MAY be a subset or superset of the original version. */
export const STATUS_203_NAI: StatusCode = {
  status: 203,
  statusText: "Non-Authoritative Information",
};

/** The server has fulfilled the request but does not need to return a response body. The server may return the updated meta information. */
export const STATUS_204_NO_CONTENT: StatusCode = {
  status: 204,
  statusText: "No Content",
};

/** Indicates the client to reset the document which sent this request. */
export const STATUS_205_RESET_CONTENT: StatusCode = {
  status: 205,
  statusText: "Reset Content",
};

/** It is used when the Range header is sent from the client to request only part of a resource. */
export const STATUS_206_PARTIAL_CONTENT: StatusCode = {
  status: 206,
  statusText: "Partial Content",
};

/** An indicator to a client that multiple operations happened, and that the status for each operation can be found in the body of the response. */
export const STATUS_207_MULTI_STATUS: StatusCode = {
  status: 207,
  statusText: "Multi-Status (WebDAV)",
};

/** Allows a client to tell the server that the same resource (with the same binding) was mentioned earlier. It never appears as a true HTTP response status in the status line, and only appears in bodies. */
export const STATUS_208_ALREADY_RESPONDED: StatusCode = {
  status: 208,
  statusText: "Already Reported (WebDAV)",
};

/** The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance. */
export const STATUS_226_IM_USED: StatusCode = {
  status: 226,
  statusText: "IM Used",
};

/** The request has more than one possible response. The user-agent or user should choose one of them. */
export const STATUS_300_MULTIPLE_CHOICES: StatusCode = {
  status: 300,
  statusText: "Multiple Choices",
};

/** The URL of the requested resource has been changed permanently. The new URL is given by the Location header field in the response. This response is cacheable unless indicated otherwise. */
export const STATUS_301_MOVED_PERMANENTLY: StatusCode = {
  status: 301,
  statusText: "Moved Permanently",
};

/** The URL of the requested resource has been changed temporarily. The new URL is given by the Location field in the response. This response is only cacheable if indicated by a Cache-Control or Expires header field. */
export const STATUS_302_FOUND: StatusCode = {
  status: 302,
  statusText: "Found",
};

/** The response can be found under a different URI and SHOULD be retrieved using a GET method on that resource. */
export const STATUS_303_SEE_OTHER: StatusCode = {
  status: 303,
  statusText: "See Other",
};

/** Indicates the client that the response has not been modified, so the client can continue to use the same cached version of the response. */
export const STATUS_304_NOT_MODIFIED: StatusCode = {
  status: 304,
  statusText: "Not Modified",
};

/** (DEPRECATED) Indicates that a requested response must be accessed by a proxy. */
export const STATUS_305_USE_PROXY: StatusCode = {
  status: 305,
  statusText: "Use Proxy (Deprecated)",
};

/** It is a reserved status status and is not used anymore. */
export const STATUS_306_UNUSED: StatusCode = {
  status: 306,
  statusText: "Unused",
};

/** Indicates the client to get the requested resource at another URI with same method that was used in the prior request. It is similar to 302 Found with one exception that the same HTTP method will be used that was used in the prior request. */
export const STATUS_307_TEMPORARY_REDIRECT: StatusCode = {
  status: 307,
  statusText: "Temporary Redirect",
};

/** Indicates that the resource is now permanently located at another URI, specified by the Location header. It is similar to 301 Moved Permanently with one exception that the same HTTP method will be used that was used in the prior request. */
export const STATUS_308_PERMANENT_REDIRECT: StatusCode = {
  status: 308,
  statusText: "Permanent Redirect",
};

/** The request could not be understood by the server due to incorrect syntax. The client SHOULD NOT repeat the request without modifications. */
export const STATUS_400_BAD_REQUEST: StatusCode = {
  status: 400,
  statusText: "Bad Request",
};

/** Indicates that the request requires user authentication information. The client MAY repeat the request with a suitable Authorization header field */
export const STATUS_401_UNAUTHORIZED: StatusCode = {
  status: 401,
  statusText: "Unauthorized",
};

/** Reserved for future use. It is aimed for using in the digital payment systems. */
export const STATUS_402_PAYMENT_REQUIRED: StatusCode = {
  status: 402,
  statusText: "Payment Required",
};

/** Unauthorized request. The client does not have access rights to the content. Unlike 401, the client’s identity is known to the server. */
export const STATUS_403_UNAUTHORIZED: StatusCode = {
  status: 403,
  statusText: "Unauthorized",
};

/** The server can not find the requested resource. */
export const STATUS_404_NOT_FOUND: StatusCode = {
  status: 404,
  statusText: "Not Found",
};

/** The request HTTP method is known by the server but has been disabled and cannot be used for that resource. */
export const STATUS_405_METHOD_NOT_ALLOWED: StatusCode = {
  status: 405,
  statusText: "Method Not Allowed",
};

/** The server doesn’t find any content that conforms to the criteria given by the user agent in the Accept header sent in the request. */
export const STATUS_406_NOT_ACCEPTABLE: StatusCode = {
  status: 406,
  statusText: "Not Acceptable",
};

/** Indicates that the client must first authenticate itself with the proxy. */
export const STATUS_407_PROXY_AUTHENTICATION_REQUIRED: StatusCode = {
  status: 407,
  statusText: "Proxy Authentication Required",
};

/** Indicates that the server did not receive a complete request from the client within the server’s allotted timeout period. */
export const STATUS_408_REQUEST_TIMEOUT: StatusCode = {
  status: 405,
  statusText: "Method Not Allowed",
};

/** The request could not be completed due to a conflict with the current state of the resource. */
export const STATUS_409_CONFLICT: StatusCode = {
  status: 409,
  statusText: "Conflict",
};

/** The requested resource is no longer available at the server. */
export const STATUS_410_GONE: StatusCode = {
  status: 410,
  statusText: "Gone",
};

/** The server refuses to accept the request without a defined Content- Length. The client MAY repeat the request if it adds a valid Content-Length header field. */
export const STATUS_411_LENGTH_REQUIRED: StatusCode = {
  status: 411,
  statusText: "Length Required",
};

/** The client has indicated preconditions in its headers which the server does not meet. */
export const STATUS_412_PRECONDITION_FAILED: StatusCode = {
  status: 412,
  statusText: "Precondition Failed",
};

/** Request entity is larger than limits defined by server. */
export const STATUS_413_REQUEST_ENTITY_TOO_LARGE: StatusCode = {
  status: 413,
  statusText: "Request Entity Too Large",
};

/** The URI requested by the client is longer than the server can interpret. */
export const STATUS_413_REQUEST_URI_TOO_LONG: StatusCode = {
  status: 414,
  statusText: "Request URI Too Long",
};

/** The media-type in Content-type of the request is not supported by the server. */
export const STATUS_415_UNSUPPORTED_MEDIA_TYPE: StatusCode = {
  status: 415,
  statusText: "Unsupported Media Type",
};

/** The range specified by the Range header field in the request can’t be fulfilled. */
export const STATUS_416_REQUESTED_RANGE_NOT_SATISFIABLE: StatusCode = {
  status: 416,
  statusText: "Requested Range Not Satisfiable",
};

/** The expectation indicated by the Expect request header field can’t be met by the server. */
export const STATUS_417_EXPECTATION_FAILED: StatusCode = {
  status: 417,
  statusText: "Expectation Failed",
};

/** It was defined as April’s fools joke and is not expected to be implemented by actual HTTP servers. (RFC 2324) */
export const STATUS_418_IM_A_TEAPOT: StatusCode = {
  status: 418,
  statusText: "I'm a Teapot",
};

/** Returned by the Twitter Search and Trends API when the client is being rate limited. */
export const STATUS_420_ENHANCE_YOUR_CALM: StatusCode = {
  status: 420,
  statusText: "Enhance Your Calm",
};

/** The server understands the content type and syntax of the request entity, but still server is unable to process the request for some reason. */
export const STATUS_422_UNPROCESSABLE_ENTITY: StatusCode = {
  status: 422,
  statusText: "Unprocessable Entity (WebDAV)",
};

/** The resource that is being accessed is locked. */
export const STATUS_423_LOCKED: StatusCode = {
  status: 423,
  statusText: "Locked (WebDAV)",
};

/** The request failed due to failure of a previous request. */
export const STATUS_424_FAILED_DEPENDENCY: StatusCode = {
  status: 424,
  statusText: "Failed Dependancy (WebDAV)",
};

/** Indicates that the server is unwilling to risk processing a request that might be replayed. */
export const STATUS_425_TOO_EARLY: StatusCode = {
  status: 425,
  statusText: "Too Early (WebDAV)",
};

/** The server refuses to perform the request. The server will process the request after the client upgrades to a different protocol. */
export const STATUS_426_UPGRADE_REQUIRED: StatusCode = {
  status: 426,
  statusText: "Upgrade Required",
};

/** The origin server requires the request to be conditional. */
export const STATUS_428_PRECONDITION_REQUIRED: StatusCode = {
  status: 428,
  statusText: "Precondition Required",
};

/** The user has sent too many requests in a given amount of time (“rate limiting”). */
export const STATUS_429_TOO_MANY_REQUESTS: StatusCode = {
  status: 429,
  statusText: "Too Many Requests",
};

/** The server is unwilling to process the request because its header fields are too large. */
export const STATUS_431_REQUEST_HEADER_FIELDS_TOO_LARGE: StatusCode = {
  status: 431,
  statusText: "Request Header Fields Too Large",
};

/** The Nginx server returns no information to the client and closes the connection. */
export const STATUS_444_NO_RESPONSE_NGINX: StatusCode = {
  status: 444,
  statusText: "No Response (Nginx)",
};

/** The request should be retried after performing the appropriate action. */
export const STATUS_449_RETRY_WITH_MS: StatusCode = {
  status: 449,
  statusText: "Retry With (Microsoft)",
};

/** Windows Parental Controls are turned on and are blocking access to the given webpage. */
export const STATUS_450_PARENTAL_CONTROLS: StatusCode = {
  status: 450,
  statusText: "Blocked By Windows Parental Controls",
};

/** The user-agent requested a resource that cannot legally be provided. */
export const STATUS_451_UNAVAILABLE_FOR_LEGAL_REASONS: StatusCode = {
  status: 451,
  statusText: "Unavailable For Legal Reasons",
};

/** The connection is closed by the client while HTTP server is processing its request, making the server unable to send the HTTP header back. */
export const STATUS_499_CLIENT_CLOSED_REQUEST: StatusCode = {
  status: 499,
  statusText: "Client Closed Request (NGINX)",
};

/** The server encountered an unexpected condition that prevented it from fulfilling the request. */
export const STATUS_500_INTERNAL_SERVER_ERROR: StatusCode = {
  status: 500,
  statusText: "Internal Server Error",
};

/** The HTTP method is not supported by the server and cannot be handled. */
export const STATUS_501_NOT_IMPLEMENTED: StatusCode = {
  status: 500,
  statusText: "Not Implemented",
};

/** The server got an invalid response while working as a gateway to get the response needed to handle the request. */
export const STATUS_502_BAD_GATEWAY: StatusCode = {
  status: 502,
  statusText: "Bad Gateway",
};

/** The server is not ready to handle the request. */
export const STATUS_503_SERVICE_UNAVAILABLE: StatusCode = {
  status: 503,
  statusText: "Service Unavailable",
};

/** The server is acting as a gateway and cannot get a response in time for a request. */
export const STATUS_504_GATEWAY_TIMEOUT: StatusCode = {
  status: 504,
  statusText: "Gateway Timeout",
};

/** The HTTP version used in the request is not supported by the server. */
export const STATUS_505_HTTP_VERSION_NOT_SUPPORTED: StatusCode = {
  status: 505,
  statusText: "HTTP Version Not Supported (Experimental)",
};

/** Indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper endpoint in the negotiation process. */
export const STATUS_506_VARIANT_ALSO_NEGOTIATES: StatusCode = {
  status: 506,
  statusText: "Variant Also Negotiates (Experimental)",
};

/** The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request. */
export const STATUS_507_INSUFFICIENT_STORAGE: StatusCode = {
  status: 507,
  statusText: "Insufficient Storage (WebDAV)",
};

/** The server detected an infinite loop while processing the request. */
export const STATUS_508_LOOP_DETECTED: StatusCode = {
  status: 508,
  statusText: "Loop Detected (WebDAV)",
};

/** Further extensions to the request are required for the server to fulfill it. */
export const STATUS_510_NOT_EXTENDED: StatusCode = {
  status: 510,
  statusText: "Not Extended",
};

/** Indicates that the client needs to authenticate to gain network access. */
export const STATUS_511_NETWORK_AUTHENTICATION_REQUIRED: StatusCode = {
  status: 511,
  statusText: "Network Authentication Required",
};

const statusTable: { [propstatusText: number]: StatusCode } = {
  100: STATUS_100_CONTINUE,
  101: STATUS_101_SWITCHING_PROTOCOL,
  102: STATUS_102_PROCESSING,
  103: STATUS_103_EARLY_HINTS,
  200: STATUS_200_OK,
  201: STATUS_201_CREATED,
  202: STATUS_202_ACCEPTED,
  203: STATUS_203_NAI,
  204: STATUS_204_NO_CONTENT,
  205: STATUS_205_RESET_CONTENT,
  206: STATUS_206_PARTIAL_CONTENT,
  207: STATUS_207_MULTI_STATUS,
  208: STATUS_208_ALREADY_RESPONDED,
  226: STATUS_226_IM_USED,
  300: STATUS_300_MULTIPLE_CHOICES,
  301: STATUS_301_MOVED_PERMANENTLY,
  302: STATUS_302_FOUND,
  303: STATUS_303_SEE_OTHER,
  305: STATUS_305_USE_PROXY,
  306: STATUS_306_UNUSED,
  307: STATUS_307_TEMPORARY_REDIRECT,
  308: STATUS_308_PERMANENT_REDIRECT,
  400: STATUS_400_BAD_REQUEST,
  401: STATUS_401_UNAUTHORIZED,
  402: STATUS_402_PAYMENT_REQUIRED,
  403: STATUS_403_UNAUTHORIZED,
  404: STATUS_404_NOT_FOUND,
  405: STATUS_405_METHOD_NOT_ALLOWED,
  406: STATUS_406_NOT_ACCEPTABLE,
  407: STATUS_407_PROXY_AUTHENTICATION_REQUIRED,
  408: STATUS_408_REQUEST_TIMEOUT,
  409: STATUS_409_CONFLICT,
  410: STATUS_410_GONE,
  411: STATUS_411_LENGTH_REQUIRED,
  412: STATUS_412_PRECONDITION_FAILED,
  413: STATUS_413_REQUEST_ENTITY_TOO_LARGE,
  415: STATUS_415_UNSUPPORTED_MEDIA_TYPE,
  416: STATUS_416_REQUESTED_RANGE_NOT_SATISFIABLE,
  417: STATUS_417_EXPECTATION_FAILED,
  418: STATUS_418_IM_A_TEAPOT,
  420: STATUS_420_ENHANCE_YOUR_CALM,
  422: STATUS_422_UNPROCESSABLE_ENTITY,
  423: STATUS_423_LOCKED,
  424: STATUS_424_FAILED_DEPENDENCY,
  425: STATUS_425_TOO_EARLY,
  426: STATUS_426_UPGRADE_REQUIRED,
  428: STATUS_428_PRECONDITION_REQUIRED,
  429: STATUS_429_TOO_MANY_REQUESTS,
  431: STATUS_431_REQUEST_HEADER_FIELDS_TOO_LARGE,
  444: STATUS_444_NO_RESPONSE_NGINX,
  449: STATUS_449_RETRY_WITH_MS,
  450: STATUS_450_PARENTAL_CONTROLS,
  451: STATUS_451_UNAVAILABLE_FOR_LEGAL_REASONS,
  499: STATUS_499_CLIENT_CLOSED_REQUEST,
  500: STATUS_500_INTERNAL_SERVER_ERROR,
  501: STATUS_501_NOT_IMPLEMENTED,
  502: STATUS_502_BAD_GATEWAY,
  503: STATUS_503_SERVICE_UNAVAILABLE,
  504: STATUS_504_GATEWAY_TIMEOUT,
  505: STATUS_505_HTTP_VERSION_NOT_SUPPORTED,
  506: STATUS_506_VARIANT_ALSO_NEGOTIATES,
  507: STATUS_507_INSUFFICIENT_STORAGE,
  508: STATUS_508_LOOP_DETECTED,
  510: STATUS_510_NOT_EXTENDED,
  511: STATUS_511_NETWORK_AUTHENTICATION_REQUIRED,
};

export function StatusWithMessage(
  status: StatusCode,
  message: string,
): StatusCode {
  let returnCode = { ...status };
  returnCode.message = message;
  return returnCode;
}

export function GetFromCode(status: number) {
  if (status in Object.keys(statusTable)) {
    return statusTable[status];
  } else {
    return undefined;
  }
}
