/**
 * TaskManger Application
 *
 * @package demo
 * @subpackage local
 * @copyright 2001-2022 Bitrix
 */

import { BitrixVue } from 'ui.vue3';
import { Dom, Loc } from 'main.core';

import { TaskManger } from './component/task-manager';

export class TaskManager {
    #application;

    constructor(rootNode): void {
        this.rootNode = document.querySelector(rootNode);
    }

    start(): void {
        const button = Dom.create('button', {
            text: Loc.getMessage('TASK_MANAGER_OPEN'),
            events: {
                click: () => this.attachTemplate()
            },
        });
        Dom.append(button, this.rootNode);

        const taskTryText = Loc.getMessage('TASK_TRY');
        const buttonTry = Dom.create('button', {
            text: taskTryText,
            events: {
                click: () => console.log(taskTryText)
            }
        });
        Dom.append(buttonTry, this.rootNode);
    }

    attachTemplate(): void {
        const context = this;

        this.#application = BitrixVue.createApp({
            name: 'TaskManager',
            components: {
                TaskManger
            },
            beforeCreate(): void {
                this.$bitrix.Application.set(context);
            },
            template: '<TaskManger/>'
        });
        this.#application.mount(this.rootNode)
    }

    detachTemplate(): void {
        if (this.#application) {
            this.#application.unmount();
        }

        this.start();
    }
}
