export type AuthUser = {
  identifier: string;
  password: string;
};

type RequestType = "GET" | "POST" | "PUT" | "DELETE";

type SessionUser = {
  user: {
    jwt: string;
    id: Number;
  };
};

type StrapiResponse<T> = {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type StrapiCollection<T> = {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type StrapiEntity<T> = {
  data: T;
};

type StrapiCollectionResponse<T> = {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type StrapiEntityResponse<T> = {
  data: T;
};

type StrapiRequest<T> = {
  data: T;
};
