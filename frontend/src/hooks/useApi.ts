import { useState, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

export const useApi = <T>(url: string, options?: AxiosRequestConfig): IUseApi<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetch = useCallback(async (): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get<T>(url, options);
            setData(response.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }, [url, options]);

    return { data, isLoading, error, fetch};
};