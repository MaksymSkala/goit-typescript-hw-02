/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const stringNumberPair: KeyValuePair<string, number> = { key: 'example', value: 42 };

const numberStringPair: KeyValuePair<number, string> = { key: 1, value: 'example' };

const booleanObjectPair: KeyValuePair<boolean, { prop: string }> = { key: true, value: { prop: 'example' } };

export {};