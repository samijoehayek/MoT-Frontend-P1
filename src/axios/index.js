import axios from "axios";

// auth
export const login = async (username, password) => {
  const user = await axios.post(
    `${process.env.NEXT_PUBLIC_API_HOST}/auth/login`,
    {
      username: username,
      password: password,
    }
  );

  return user.data;
};

export const signup = async (username, email, password, tag) => {
  const user = await axios.post(
    `${process.env.NEXT_PUBLIC_API_HOST}/auth/signup`,
    {
      username: username,
      email: email,
      password: password,
      tag: tag,
    }
  );

  return user.data;
};

export const getUserSession = async (token) => {
  const userSessions = await axios.get(
    `${process.env.NEXT_PUBLIC_API_HOST}/users/getUserSession`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return userSessions.data;
};

export const toggleActivityStatus = async (token, isActive) => {
  const userSessions = await axios.put(
    `${process.env.NEXT_PUBLIC_API_HOST}/users/toggleSessionActivity`,
    {isActive: isActive},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return userSessions.data;
};

export const createUserSession = async (token) => {
  const userSessions = await axios.post(
    `${process.env.NEXT_PUBLIC_API_HOST}/users/createUserSession`,
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return userSessions.data;
};

export const getUserByJWT = async (token, filter) => {
  const user = await axios.get(
    `${process.env.NEXT_PUBLIC_API_HOST}/users/GetUserById`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        filter,
      },
    }
  );

  return user.data;
};

export const verifyEmail = async (verificationString) => {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_API_HOST}/auth/verify/${verificationString}`
  );

  return response.data;
};

export const sendEmailPasswordChange = async (email) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_HOST}/auth/forgotPasswordEmail`,
    {
      email: email,
    }
  );

  return response.data;
};

export const forgotPassword = async (password, verificationString) => {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_API_HOST}/auth/forgotPassword/${verificationString}`,
    {
      newPassword: password,
    }
  );

  return response.data;
};
