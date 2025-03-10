// Интерфейс возвращаемого значения хука
export type UseQueryResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
};

// Тип для функции запроса
export type QueryFunction<T> = () => Promise<T>;

// Тип для ключа запроса: строка или массив строк/чисел
export type QueryKey = string | (string | number)[];

export type UseQueryArgs<T> = {
  queryKey: QueryKey;
  queryFn: QueryFunction<T>;
};
