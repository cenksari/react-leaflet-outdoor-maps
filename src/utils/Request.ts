export interface IRequest {
  url: string;
  method: string;
  headers?: any;
  postData?: any;
}

export interface IResponse {
  data?: any;
  title?: string;
  status: number;
}

const controller: AbortController = new AbortController();

const { signal } = controller;

/**
 * Retrieves a response from the server based on the provided request parameters.
 *
 * @param {IRequest} parameters - The request parameters including the URL, HTTP method, headers, and post data.
 * @return {Promise<IResponse | IError>} A promise that resolves to either an IResponse or IError object.
 */
export const getResponse = async (parameters: IRequest): Promise<IResponse> => {
  const baseURL = '/';

  const buildedUrl: string = `${baseURL}${parameters.url}`;

  if (!parameters || !parameters.method || !parameters.url) {
    return {
      data: {
        title: 'Parameters, url or http method not found',
      },
      status: 0,
    };
  }

  let response: Response;

  try {
    if (parameters.method === 'GET') {
      response = await fetch(buildedUrl, { signal });
    } else {
      response = await fetch(buildedUrl, {
        signal,
        method: parameters.method,
        headers: {
          ...parameters.headers,
        },
        body: JSON.stringify(parameters.postData),
      });
    }

    const data: any = await response.json();

    if (!response.ok) {
      return {
        data: {
          title: data.title ?? response.statusText,
        },
        status: response.status,
      };
    }

    return {
      data,
      status: response.status,
    } as IResponse;
  } catch (error: any) {
    return {
      data: {
        title: error.message,
      },
      status: 0,
    };
  }
};
