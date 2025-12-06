interface ImportMeta {
  glob<T = any>(
    globPattern: string,
  ): Record<string, () => Promise<{ default: T }>>;
}
