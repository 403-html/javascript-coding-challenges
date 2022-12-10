/* In memory cache */

function InMemoryCache(capacity) {};

InMemoryCache.prototype.set = function (key, value) {}

InMemoryCache.prototype.get = function (key) {};

InMemoryCache.prototype.remove = function (key) {};

InMemoryCache.prototype.clear = function () {}

InMemoryCache.prototype.getCapacity = function () {}

InMemoryCache.prototype.setCapacity = function (capacity) {};

// Don't delete export
module.exports = InMemoryCache;
