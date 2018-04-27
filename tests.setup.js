import jsdom from 'jsdom';
import chai from 'chai';
import spies from 'chai-spies';
import { configure, shallow, render, mount } from 'enzyme';
import { default as Adapter } from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const { JSDOM } = jsdom;

jest.useFakeTimers();

global.chai = chai;
global.should = chai.should();
global.shallow = shallow;
global.render = render;
global.mount = mount;

// ========================================================
// apply `spies` plugin to chai
// ========================================================
chai.use(spies);

// ========================================================
// Predefine DOM env to test env
// ========================================================
const { document } = new JSDOM('<!doctype html><html><body></body></html>').window;
global.document = document;
global.window = document.defaultView;

// ========================================================
// Accessing the “not” property of Chai causes a flag to be set which negates the whole expectation.
// Also the “not” property is read-only while we need to write to it to merge it with the “not” property
// of the Jest expectations.
// ========================================================
const originalNot = Object.getOwnPropertyDescriptor(chai.Assertion.prototype, 'not').get;

Object.defineProperty(chai.Assertion.prototype, 'not', {
  get() {
    Object.assign(this, this.assignedNot);
    return originalNot.apply(this);
  },
  set(newNot) {
    this.assignedNot = newNot;
    return newNot;
  },
});

// Combine both jest and chai matchers on expect
const originalExpect = global.expect;

global.expect = (actual) => {
  const originalMatchers = originalExpect(actual);
  const chaiMatchers = chai.expect(actual);

  return Object.assign(chaiMatchers, originalMatchers);
};

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
