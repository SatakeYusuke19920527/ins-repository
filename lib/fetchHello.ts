import useSWR from 'swr';

export function getHelloAPI() {
  const { data, error } = useSWR('http://localhost:3000/api/hello', fetch);

  if (error) return "error";
  if (!data) return "loading";

  return data
}