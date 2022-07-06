import { Item } from './item';
import "./task-manager.css";

export const TaskManger =
{
    components:
    {
        Item
    },

    data(): object {
        return {
            list: []
        }
    },

    methods:
    {
        addNew(): void {
            const result = prompt(this.$Bitrix.Loc.getMessage('TASK_MANAGER_QUESTION'));
            this.list.push(result);
        },

        close(): void {
            this.$Bitrix.Application.get().detachTemplate();
        },
    },

    // language=Vue
    template: `
        <div class="taskmanager-list">
            <div class="taskmanager-list-title">{{$Bitrix.Loc.getMessage('TASK_MANAGER_TODAY_TITLE')}}</div>
            <template v-for="(value, index) in list" :key="index">
                <Item :position="index+1" :text="value"/>
            </template>
            <template v-if="list.length <= 0">
                  <div class="taskmanager-list-empty">{{$Bitrix.Loc.getMessage('TASK_MANAGER_LIST_EMPTY')}}</div>
            </template>
            <div class="taskmanager-list-buttons">
                <button @click="addNew">{{$Bitrix.Loc.getMessage('TASK_MANAGER_ADD')}}</button>
                <button @click="close">{{$Bitrix.Loc.getMessage('TASK_MANAGER_CLOSE')}}</button>
            </div>
        </div>
    `
};
