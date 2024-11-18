interface IUseApi<T> {
    data: T | null;
    isLoading: boolean;
    error: string | null;
    fetch: () => void;
}