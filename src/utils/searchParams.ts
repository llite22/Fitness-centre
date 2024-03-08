/// Для пагинации обязательно!!!!!!!
export const updateSearchParams = (type: string, value: string): string => {
    // Получить текущие параметры поиска URL
    const searchParams: URLSearchParams = new URLSearchParams(window.location.search);

    // Установить указанный параметр поиска в заданное значение
    searchParams.set(type, value);

    // Установить указанный параметр поиска в заданное значение
    const newPathname: string = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
};