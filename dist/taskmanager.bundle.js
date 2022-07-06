(function (exports,ui_vue3,main_core) {
    'use strict';

    var Item = {
      props: {
        position: {
          "default": 0
        },
        text: {
          "default": ''
        }
      },
      // language=Vue
      template: "<div class=\"taskmanager-list-item\">{{position}}. {{text}}</div>"
    };

    var TaskManger = {
      components: {
        Item: Item
      },
      data: function data() {
        return {
          list: []
        };
      },
      methods: {
        addNew: function addNew() {
          var result = prompt(this.$Bitrix.Loc.getMessage('TASK_MANAGER_QUESTION'));
          this.list.push(result);
        },
        close: function close() {
          this.$Bitrix.Application.get().detachTemplate();
        }
      },
      // language=Vue
      template: "\n        <div class=\"taskmanager-list\">\n            <div class=\"taskmanager-list-title\">{{$Bitrix.Loc.getMessage('TASK_MANAGER_TODAY_TITLE')}}</div>\n            <template v-for=\"(value, index) in list\" :key=\"index\">\n                <Item :position=\"index+1\" :text=\"value\"/>\n            </template>\n            <template v-if=\"list.length <= 0\">\n                  <div class=\"taskmanager-list-empty\">{{$Bitrix.Loc.getMessage('TASK_MANAGER_LIST_EMPTY')}}</div>\n            </template>\n            <div class=\"taskmanager-list-buttons\">\n                <button @click=\"addNew\">{{$Bitrix.Loc.getMessage('TASK_MANAGER_ADD')}}</button>\n                <button @click=\"close\">{{$Bitrix.Loc.getMessage('TASK_MANAGER_CLOSE')}}</button>\n            </div>\n        </div>\n    "
    };

    function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

    function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

    var _application = /*#__PURE__*/new WeakMap();

    var TaskManager = /*#__PURE__*/function () {
      function TaskManager(rootNode) {
        babelHelpers.classCallCheck(this, TaskManager);

        _classPrivateFieldInitSpec(this, _application, {
          writable: true,
          value: void 0
        });

        this.rootNode = document.querySelector(rootNode);
      }

      babelHelpers.createClass(TaskManager, [{
        key: "start",
        value: function start() {
          var _this = this;

          var button = main_core.Dom.create('button', {
            text: main_core.Loc.getMessage('TASK_MANAGER_OPEN'),
            events: {
              click: function click() {
                return _this.attachTemplate();
              }
            }
          });
          main_core.Dom.append(button, this.rootNode);
          var taskTryText = main_core.Loc.getMessage('TASK_TRY');
          var buttonTry = main_core.Dom.create('button', {
            text: taskTryText,
            events: {
              click: function click() {
                return console.log(taskTryText);
              }
            }
          });
          main_core.Dom.append(buttonTry, this.rootNode);
        }
      }, {
        key: "attachTemplate",
        value: function attachTemplate() {
          var context = this;
          babelHelpers.classPrivateFieldSet(this, _application, ui_vue3.BitrixVue.createApp({
            name: 'TaskManager',
            components: {
              TaskManger: TaskManger
            },
            beforeCreate: function beforeCreate() {
              this.$bitrix.Application.set(context);
            },
            template: '<TaskManger/>'
          }));
          babelHelpers.classPrivateFieldGet(this, _application).mount(this.rootNode);
        }
      }, {
        key: "detachTemplate",
        value: function detachTemplate() {
          if (babelHelpers.classPrivateFieldGet(this, _application)) {
            babelHelpers.classPrivateFieldGet(this, _application).unmount();
          }

          this.start();
        }
      }]);
      return TaskManager;
    }();

    exports.TaskManager = TaskManager;

}((this.BX = this.BX || {}),BX.Vue3,BX));
//# sourceMappingURL=taskmanager.bundle.js.map
