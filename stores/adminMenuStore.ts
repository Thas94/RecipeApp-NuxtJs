import { defineStore } from "pinia";
import {AdminMenuService} from '../service/menu-service/admin/AdminMenuService'
import {type AdminNavigationMenuModel} from '../types/admin/adminMenuModel'

export const useAdminMenuStore = defineStore('adminMenuStore', () => {

    const menuList = ref([{}]) as Ref<AdminNavigationMenuModel[]>
    const router = useRouter()
    onMounted(() => {
    })

    const GetMenuList = () =>{
        menuList.value = AdminMenuService.getNavigationMenuList()
    }

    const NavigateToPage = (page: AdminNavigationMenuModel) => {
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