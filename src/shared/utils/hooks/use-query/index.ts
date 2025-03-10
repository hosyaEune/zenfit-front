import { useState, useEffect } from "react";
import { type UseQueryArgs, type UseQueryResult } from "./types";
// Глобальный кэш с типизацией
const queryCache = new Map<string, any>(); // Можно заменить `any` на более строгий тип, если нужно

// Основной хук с дженериком для типа данных
export const useQuery = <T>({
  queryFn,
  queryKey,
}: UseQueryArgs<T>): UseQueryResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // Преобразуем ключ в строку
  const cacheKey = Array.isArray(queryKey) ? queryKey.join("-") : queryKey;

  // Функция для выполнения запроса
  const fetchData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const result = await queryFn();
      queryCache.set(cacheKey, result);
      setData(result);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setIsLoading(false);
    }
  };

  // Эффект для первоначальной загрузки или использования кэша
  useEffect(() => {
    if (queryCache.has(cacheKey)) {
      setData(queryCache.get(cacheKey) as T); // Приводим тип из кэша
      setIsLoading(false);
    } else {
      fetchData();
    }
  }, [cacheKey]); // Зависимость — только cacheKey

  return { data, isLoading, error, refetch: fetchData };
};
