interface HttpResponse<T> extends Response {
    parsedBody?: T
}

export async function doFetch<T>(request: RequestInfo, httpMethod?: string, requestBody?: any): Promise<HttpResponse<T>> {
  const options: any = {
    method: httpMethod || 'GET',
    headers: new Headers({
      'content-type': 'application/json', mode: 'no-cors', pragma: 'no-cache', 'cache-control': 'no-cache',
    }),
  };

  if (httpMethod === 'POST' || httpMethod === 'PUT') {
    options.body = JSON.stringify({ ...requestBody });
  }

  const response: HttpResponse<T> = await fetch(request, options);
  response.parsedBody = await response.json();

  return response;
}
