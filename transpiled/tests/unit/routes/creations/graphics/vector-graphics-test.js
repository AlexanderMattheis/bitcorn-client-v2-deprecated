"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qunit_1 = require("qunit");
var ember_qunit_1 = require("ember-qunit");
qunit_1.module('Unit | Route | creations/graphics/vector-graphics', function (hooks) {
    ember_qunit_1.setupTest(hooks);
    qunit_1.test('it exists', function (assert) {
        var route = this.owner.lookup('route:creations/graphics/vector-graphics');
        assert.ok(route);
    });
});
//# sourceMappingURL=vector-graphics-test.js.map