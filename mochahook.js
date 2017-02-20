/*
 Hook for mocha which sets everything we need for tests
 */

import chai from "chai";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);

global.expect = chai.expect;
