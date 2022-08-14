<template>
    <main>
        <Card class="my-2 bg-white dark:bg-zinc-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl dark:shadow-md dark:text-zinc-400">
            <template #title>
                Supervision
            </template>
            <template #content>
                <TicketTable name="dt-supervision" />
            </template>
        </Card>
    </main>
</template>

<script setup lang="ts">
import TicketTable from '@/components/DataTable/TicketTable.vue'
</script>
