describe("In memory cache - challenge", () => {
  it("should construct a cache with a given size", () => {
    const cache = new InMemoryCache(10);
    expect(cache).toBeDefined();
    expect(cache.capacity).toBe(10);
  });

  it("should be able to set and get value", () => {
    const cache = new InMemoryCache(10);
    const data = { keyName: "key1", value: "value1" };
    cache.set(data.keyName, data.value);
    expect(cache.get(data.keyName)).toBe(data.value);
  });

  it("should throw an error when trying to set a value with a null key", () => {
    const cache = new InMemoryCache(10);
    const data = {keyName: null, value: "value1"};
    expect(() => cache.set(data.keyName, data.value)).toThrowError("Key must be a non-null string");
  });

  it("should throw an error when trying to set a value with a null value", () => {
    const cache = new InMemoryCache(10);
    const data = {keyName: "key1", value: null};
    expect(() => cache.set(key, data.value)).toThrowError("Value must be a non-null value");
  });

  it("should only take buffers as values", () => {
    const cache = new InMemoryCache(10);
    const data = { keyName: "key1", value: "value1" };
    expect(() => cache.set(data.keyName, data.value)).toThrowError("Value must be a buffer");
  });

  it("should throw an error when trying to set a value with a key that is not a string", () => {
    const cache = new InMemoryCache(10);
    const data = {keyName: 1, value: "value1"};
    expect(() => cache.set(data.keyName, data.value)).toThrowError("Key must be a non-null string");
  });

  it("should throw an error when trying to set a key that is undefined", () => {
    const cache = new InMemoryCache(10);
    const data = {keyName: undefined, value: "value1"};
    expect(() => cache.set(data.keyName, data.value)).toThrowError("Key must be a non-null string");
  });

  it("should throw an error when trying to set a value that is undefined", () => {
    const cache = new InMemoryCache(10);
    const data = {keyName: "key1", value: undefined};
    expect(() => cache.set(data.keyName, data.value)).toThrowError("Value must be a non-null value");
  });

  it("should be able to set and get multiple values", () => {
    const cache = new InMemoryCache(10);
    const data = [
      { keyName: "key1", value: "value1" },
      { keyName: "key2", value: "value2" },
      { keyName: "key3", value: "value3" }
    ];
    data.forEach(d => cache.set(d.keyName, d.value));
    data.forEach(d => expect(cache.get(d.keyName)).toBe(d.value));
  });

  it("should throw an error when trying to get a non-existing value", () => {
    const cache = new InMemoryCache(10);
    expect(() => cache.get("key1")).toThrowError("Key not found");
  });

  it("should throw an error when trying to set a value with a key that already exists", () => {
    const cache = new InMemoryCache(10);
    const data = { keyName: "key1", value: "value1", overwriteValue: "value2" };
    cache.set(data.keyName, data.value);
    expect(() => cache.set(data.keyName, data.overwriteValue)).toThrowError("Key already exists");
  });

  it("should remove the least recently used item when the cache bytes capacity is reached", () => {
    const cache = new InMemoryCache(12);
    const data = [
      { keyName: "key1", value: "value1" },
      { keyName: "key2", value: "value2" },
      { keyName: "key3", value: "value3" }
    ];
    data.forEach(d => cache.set(d.keyName, d.value));
    expect(cache.get(data[0].keyName)).toBeUndefined();
    data.slice(1).forEach(d => expect(cache.get(d.keyName)).toBe(d.value));
  });

  it("should be able to remove a value based on its key", () => {
    const cache = new InMemoryCache(10);
    const data = [
      { keyName: "key1", value: "value1" },
      { keyName: "key2", value: "value2" },
      { keyName: "key3", value: "value3" }
    ];
    data.forEach(d => cache.set(d.keyName, d.value));
    cache.remove(data[0].keyName);
    expect(cache.get(data[0].keyName)).toBeUndefined();
    data.slice(1).forEach(d => expect(cache.get(d.keyName)).toBe(d.value));
  });

  it("should be able to remove all values", () => {
    const cache = new InMemoryCache(10);
    const data = [
      { keyName: "key1", value: "value1" },
      { keyName: "key2", value: "value2" },
      { keyName: "key3", value: "value3" }
    ];
    data.forEach(d => cache.set(d.keyName, d.value));
    cache.clear();
    data.forEach(d => expect(cache.get(d.keyName)).toBeUndefined());
  });

  it("should be able to get current capacity", () => {
    const cache = new InMemoryCache(10);
    expect(cache.getCapacity()).toBe(10);
  });

  it("should be able to set new capacity", () => {
    const cache = new InMemoryCache(10);
    expect(cache.getCapacity()).toBe(10);
    cache.setCapacity(12);
    expect(cache.getCapacity()).toBe(12);
  });
});
