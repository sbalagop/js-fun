describe("EventEmitter", function () {
  "use strict";
  describe("#addEventListener", function () {
    it("shoudld add the listener for the given event", function () {
      let ee = new EventEmitter();
      ee.addListener("click", () => { });
      ee.addListener("click", () => { });
      ee.addListener("tap", () => { });
      expect(ee.eventNames().length).to.be(2);
      expect(ee.listeners("click").length).to.be(2);
      expect(ee.listeners("tap").length).to.be(1);
    });
  });
  describe("#removeEventListener", function () {
    it("shoudld add the listener for the given event", function () {
      let ee = new EventEmitter();

      let l1 = () => { };
      let l2 = () => { };
      let l3 = () => { };

      ee.addListener("click", l1);
      ee.addListener("click", l2);
      ee.addListener("tap", l3);

      ee.removeListener("click", l2);
      ee.removeListener("tap", l3);

      expect(ee.eventNames().length).to.be(2);
      expect(ee.listeners("click").length).to.be(1);
      expect(ee.listeners("tap").length).to.be(0);
    });
  });
  describe("#eventNames", function () {
    it("shoudld add the listener for the given event", function () {
      let ee = new EventEmitter();

      let l1 = () => { };
      let l2 = () => { };
      let l3 = () => { };

      ee.addListener("click", l1);
      ee.addListener("click", l2);
      ee.addListener("tap", l3);

      expect(ee.eventNames()).to.eql(["click", "tap"]);
    });
  });
  describe("#eventNames", function () {
    it("shoudld add the listener for the given event", function () {
      let ee = new EventEmitter();

      let l1 = () => { };
      let l2 = () => { };
      let l3 = () => { };

      ee.addListener("click", l1);
      ee.addListener("tap", l3);
      ee.addListener("click", l2);

      expect(ee.listeners("click")).to.eql([l1, l2]);
      expect(ee.listeners("tap")).to.eql([l3]);
    });
  });
  describe("#emit", function () {
    it("shoudld add the listener for the given event", function () {
      let ee = new EventEmitter();
      let sum = 0;
      let l1 = (a, b) => {
        sum += a + b;
      };
      let l2 = (a, b) => {
        sum += a + b;
      };
      let l3 = () => { };

      ee.addListener("click", l1);
      ee.addListener("tap", l3);
      ee.addListener("click", l2);

      ee.emit("click", 1, 2);
      expect(sum).to.be(6);
    });
  });
});
