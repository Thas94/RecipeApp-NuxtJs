import { defineStore } from "pinia";
import {AdminMenuService} from '../service/menu-service/admin/AdminMenuService'
import {type AdminMenuModel} from '../types/admin/adminMenuModel'

export const useAdminMenuStore = defineStore('adminMenuStore', () => {

    const menuList = ref([{}]) as Ref<AdminMenuModel[]>
    const router = useRouter()
    onMounted(() => {
    })

    const GetMenuList = () =>{
        menuList.value = AdminMenuService.getMenuList()
    }

    const NavigateToPage = (page: AdminMenuModel) => {
        debugger
        menuList.value.forEach(function(item, index) {
            item.label == page.label ? item.active = true : item.active = false
        })
        router.push(page.to)
    }

    return {
        menuList,
        GetMenuList,
        NavigateToPage
    }
})