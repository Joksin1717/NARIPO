import { useCallback, useEffect, useState } from 'react';
import { authAPI } from '@/utils/laravelAPI';
import { useUserStore } from '@/store/userStore';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export function useAuth() {
  const { user, setUser, logout: logoutStore } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Login
  const login = useCallback(
    async (credentials: LoginCredentials) => {
      try {
        setLoading(true);
        setError(null);

        const response = await authAPI.login(credentials.email, credentials.password);
        
        // Store token
        if (response.data?.token) {
          localStorage.setItem('token', response.data.token);
        }

        // Store user
        if (response.data?.user) {
          setUser(response.data.user);
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }

        return response;
      } catch (err: any) {
        const message = err.message || 'Login failed';
        setError(message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [setUser]
  );

  // Register
  const register = useCallback(
    async (credentials: RegisterCredentials) => {
      try {
        setLoading(true);
        setError(null);

        const response = await authAPI.register(
          credentials.email,
          credentials.password,
          credentials.name
        );

        // Store token
        if (response.data?.token) {
          localStorage.setItem('token', response.data.token);
        }

        // Store user
        if (response.data?.user) {
          setUser(response.data.user);
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }

        return response;
      } catch (err: any) {
        const message = err.message || 'Registration failed';
        setError(message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [setUser]
  );

  // Logout
  const logout = useCallback(async () => {
    try {
      setLoading(true);
      await authAPI.logout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      logoutStore();
      setLoading(false);
    }
  }, [logoutStore]);

  // Get current user
  const getMe = useCallback(async () => {
    try {
      setLoading(true);
      const response = await authAPI.me();
      if (response.data) {
        setUser(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response;
    } catch (err: any) {
      const message = err.message || 'Failed to fetch user';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [setUser]);

  // Initialize user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser && !user) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Error parsing stored user:', err);
      }
    }
  }, [user, setUser]);

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    getMe,
  };
}
