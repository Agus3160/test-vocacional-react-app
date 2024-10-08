export type ApiResponse<T> = {
  data: T | null;
  message: string;
  success: boolean;
  status: number;
  errors?: string[];
};

const apiURLHost = import.meta.env.VITE_API_URL || "http://localhost:8000";

const fetchApi = async <T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${apiURLHost}${url}`, options);

    if (!response.ok) {
      const data: ApiResponse<null> = await response.json();
      return {
        data: null,
        errors: data.errors,
        message: data.message,
        success: false,
        status: response.status,
      };
    }

    const data: ApiResponse<T> = await response.json();

    return {
      data: data.data,
      message: data.message,
      success: true,
      status: response.status,
    };
  } catch (e) {
    if (e instanceof TypeError) {
      return {
        data: null,
        message: "Network error or CORS issue",
        success: false,
        status: 503, 
      };
    }

    if (e instanceof Error) {
      return {
        data: null,
        message: e.message,
        success: false,
        status: 500, 
      };
    }

    return {
      data: null,
      message: "Unexpected error",
      success: false,
      status: 500,
    };
  }
};

export default fetchApi;