<?php
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("BitrixVue");
?>

<?php
\Bitrix\Main\UI\Extension::load("local.taskmanager");
?>

<div id="application"></div>

<script type="text/javascript">
    const taskManager = new BX.TaskManager('#application');
    taskManager.start();
</script>

<script>
    import {BitrixVue} from 'ui.vue3';

    const Component = {
        template: 'Hello, world!'
    };

    BitrixVue.createApp({
        components: {
            Component
        },
        template: `<Component/>`
    }).mount('#application');
</script>

<?php require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php"); ?>