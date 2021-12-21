import { Query } from "./declarations";

/** Generate a unique key. */
export function generateHash(): string {
  return Math.random()
    .toString(36)
    .substring(2, 15) + Math.random().toString(36)
    .substring(2, 15);
}

export function generateURL(url: string, params: Query = {}): string {
  const query: string = new URLSearchParams(params).toString();
  return `${url}?${query}`;
}

export type FunctionPredicate<T, K> = (
  entity: T,
  value: any,
  key: K
) => Boolean;

function transform<T, K extends keyof T>(
  obj: T,
  predicate: FunctionPredicate<T, K>
) {
  return Object.keys(obj).reduce((prev, curr) => {
    const key = curr as K;
    const memo = prev as T;

    if (predicate(obj, obj[key], key)) {
      memo[key] = obj[key];
    }

    return memo;
  }, {});
}

/**
 * Omit properties.
 * @param obj Entity.
 * @param items Properties.
 */
export const omitProps = <T, K extends keyof T>(obj: T, items: K[]) =>
  transform(obj, (_, __, key) => !items.includes(Number(key) as K));
