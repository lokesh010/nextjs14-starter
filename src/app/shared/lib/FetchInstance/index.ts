import * as e from './handleErrors';

const fetchClient: typeof fetch = async (url, params) => {
  // eslint-disable-next-line
  const headers: HeadersInit = {
    Authorization: 'Bearer ' + 'token',
  };

  try {
    const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '' + url, {
      headers,
      ...params,
    });

    if (data.ok) return data.json();

    // handle promise errors
    switch (data.status) {
      case 404:
        window.location.pathname = '/admin/dashboard';
        break;

      case 401:
        e.handleUnauthorized();
        break;
      case 403:
        e.handleForbidden();
        break;

      default:
        return Promise.reject(data);
    }
  } catch (error: any) {
    console.log(`Fetch Error : ${error}`);
  }
};

export default fetchClient;
