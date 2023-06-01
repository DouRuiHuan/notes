class Obsever {
  constructor() {
    this.eventList = {};
  }
  on(evtName, cb) {
    this.eventList[evtName] = this.eventList[evtName] || [];
    this.eventList[evtName].push(cb);
  }
  emit(evtName, ...arg) {
    (this.eventList[evtName] || []).forEach((cb) => {
      cb(...arg);
    });
  }
}
