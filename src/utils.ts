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
