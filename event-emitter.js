class EventEmitter {
  constructor() {
    this._eventMap = new Map();
  }
  addListener(event, listener) {
    if (!this._eventMap.has(event)) {
      this._eventMap.set(event, []);
    }
    this._eventMap.get(event).push(listener);
  }
  removeListener(event, listener) {
    if (!this._eventMap.has(event)) {
      return;
    } else {
      let listeners = this._eventMap.get(event);
      let index = listeners.indexOf(listener);
      if (index >= 0) {
        listeners.splice(index, 1);
      }
    }
  }
  eventNames() {
    // Create a shallow-copied array from iterable
    return Array.from(this._eventMap.keys());
  }
  listeners(event) {
    return Array.from(this._eventMap.get(event));
  }
  emit(event, ...args) {
    if (!this._eventMap.has(event)) {
      return;
    } else {
      let listeners = this._eventMap.get(event);
      listeners.forEach((listener) => listener.call(null, ...args));
    }
  }
}
