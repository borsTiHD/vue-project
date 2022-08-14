<template>
    <DataTable
        :value="data"
        v-model:filters="filters"
        :rowClass="rowClass"
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
        sortField="id" :sortOrder="-1"
        removableSort
        filterDisplay="menu"
        contextMenu
        v-model:contextMenuSelection="selectedItem"
        @rowContextmenu="onRowContextMenu"
        stateStorage="local" :stateKey="props.name"
    >
        <template #header>
            <div class="flex justify-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined" @click="clearFilter()"/>
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText v-model="filters['global'].value" placeholder="Suche" />
                </span>
            </div>
        </template>
        <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" sortable :headerClass="tableClass" />
    </DataTable>

    <ContextMenu :model="menuModel" ref="cm" />
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue'
import { FilterMatchMode, FilterOperator } from 'primevue/api'
import { useToast } from 'primevue/usetoast'
import useEmitter from '@/composables/useEmitter'
import useAxios from '@/composables/useAxios'

const props = defineProps({
    name: {
        type: String,
        default: 'primary'
    }
})

const axios = useAxios()
const toast = useToast()
const cm = ref()
const loading = ref(false)
const data = ref()
const selectedItem = ref()
const menuModel = ref([
    { label: 'View', icon: 'pi pi-fw pi-search', command: () => viewItem(selectedItem) },
    { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteItem(selectedItem) }
])
const columns = ref([
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'country.name', header: 'Country' },
    { field: 'representative.name', header: 'Agent' },
    { field: 'date', header: 'Date' },
    { field: 'balance', header: 'Balance' },
    { field: 'status', header: 'Status' },
    { field: 'activity', header: 'Activity' }
])
const filters = ref({
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
    'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    'representative': { value: null, matchMode: FilterMatchMode.IN },
    'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    'balance': { operator: FilterOperator.AND, constraints: [ {value: null, matchMode: FilterMatchMode.EQUALS }] },
    'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    'activity': { value: null, matchMode: FilterMatchMode.BETWEEN }
})

// Clear all filters
const clearFilter = () => {
    filters.value.global.value = null
}

// Open the context menu
const onRowContextMenu = (event: any) => {
    cm.value.show(event.originalEvent)
}

const viewItem = (item: any) => {
    console.log('viewItem', item._rawValue)
    toast.add({ severity: 'info', summary: 'Info Message', detail:'Item Selected', group: 'br', life: 3000 })
}

const deleteItem = (item: any) => {
    console.log('deleteItem', item._rawValue)
    toast.add({ severity: 'error', summary: 'Info Message', detail:'Item Deleted', group: 'br', life: 3000 })
}

// Row Colorizer
const rowClass = (rowData: any) => {
    return 'bg-white dark:bg-zinc-600 dark:text-white'
    // return rowData.status === 'qualified' ? 'bg-yellow-100 dark:bg-yellow-800 dark:text-white' : 'bg-green-100 dark:bg-green-800 dark:text-white'
}

// Table CSS Classes
const tableClass = ['bg-zinc-100', 'dark:bg-zinc-700', 'dark:border-zinc-600', 'dark:text-white']
const styleTable = () => {
    const tableHeader = document.getElementsByClassName('p-datatable-header')
    Array.from(tableHeader).forEach((el) => { el.classList.add(...tableClass) })
    const tablePaginator = document.getElementsByClassName('p-paginator')
    Array.from(tablePaginator).forEach((el) => { el.classList.add(...tableClass) })
}

// Fetch data from the server
const fetchData = async() => {
    loading.value = true
    const response = await axios.get('/data/customers')
    loading.value = false
    return response.data.customers
}

// Load data on startup
onMounted(async() => {
    styleTable() // Add CSS classes to the table
    data.value = await fetchData()
})

// Reload emitter
const emitter = useEmitter()
emitter.$on('reloadtimer', async() => {
    console.log('[Supervision] -> Fetching new data.')
    data.value = await fetchData()
})
</script>

<style>
.p-sortable-column-icon {
    color: #000 !important;
}
.dark .p-sortable-column-icon {
    color: #fff !important;
}
.p-paginator-page.p-paginator-element.p-link.p-highlight {
    background-color: #fff !important;
}
.dark .p-paginator-page.p-paginator-element.p-link.p-highlight {
    background-color: rgb(116, 116, 116) !important;
    color: #fff !important;
}
</style>
