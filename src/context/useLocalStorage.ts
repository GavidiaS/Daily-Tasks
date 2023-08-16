import React from "react";

export function useLocalStorage<T>(key: string, initialValue: T): {
  item: T,
  saveItem: (value: T) => void,
  loading: boolean,
  error: boolean
} {
  const [itemValue, setItemValue] = React.useState<{
    item: T,
    loading: boolean,
    error: boolean
  }>({
    item: initialValue,
    loading: true,
    error: false
  });
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const item = localStorage.getItem(key);
        let parsedItem;
        if (!item) {
          localStorage.setItem(key, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(item);
        }
        setItemValue({ ...itemValue, item: parsedItem, loading: false });
      } catch (error) {
        setItemValue({ ...itemValue, loading: false, error: true });
      }
    }, 2000);
  }, []);
  function saveItem(value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
    setItemValue({ ...itemValue, item: value });
  }
  return { item: itemValue.item, saveItem, loading: itemValue.loading, error: itemValue.error };
}