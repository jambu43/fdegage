import { AuthUser } from "@/types";

const STRAPI_URL =
  (process.env.STRAPI_URL as string) || "http://localhost:1337";

export const getUser = async ({ identifier, password }: AuthUser) => {
  try {
    const response = await fetch(`${STRAPI_URL}/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        jwt: data.jwt,
        user: data.user,
      };
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const response = await fetch(`${STRAPI_URL}/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      return data?.user;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const response = await fetch(`${STRAPI_URL}/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const resetPassword = async (
  code: string,
  password: string,
  passwordConfirmation: string
) => {
  try {
    const response = await fetch(`${STRAPI_URL}/auth/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, password, passwordConfirmation }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};
