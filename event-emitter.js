/* jshint esversion: 6*/
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
        return Array.from(this._eventMap.keys()).slice(0);
    }
    listeners(event) {
        return Array.from(this._eventMap.get(event)).slice(0);
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