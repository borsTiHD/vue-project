<template>
    <main>
        <Card class="my-2 bg-white dark:bg-zinc-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl dark:shadow-md dark:text-zinc-400">
            <template #title>
                Supervision
            </template>
            <template #content>
                <DataTable
                    :value="data"
                    paginator
                    :rows="10"
                    dataKey="id"
                    rowHover
                    :loading="loading"
                    :rowsPerPageOptions="[10,25,50]"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Zeigt {first} bis {last} von {totalRecords} Einträgen"
                    emptyMessage="No data to display"
                    responsiveLayout="scroll"
                >
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Agent"></Column>
                    <Column field="date" header="Date"></Column>
                    <Column field="balance" header="Balance"></Column>
                    <Column field="status" header="Status"></Column>
                    <Column field="activity" header="Activity"></Column>
                </DataTable>
            </template>
        </Card>
    </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useEmitter from '@/composables/useEmitter'
import useAxios from '@/composables/useAxios'

const axios = useAxios()
const data = ref([])
const loading = ref(false)

const fetchData = async() => {
    loading.value = true
    const response = await axios.get('/data/customers')
    loading.value = false
    return response.data.customers
}

// Load data on startup
onMounted(async() => {
    data.value = await fetchData()
})

// Reload emitter
const emitter = useEmitter()
emitter.$on('reloadtimer', async() => {
    console.log('[Supervision] -> Fetching new data.')
    data.value = await fetchData()
})
</script>
