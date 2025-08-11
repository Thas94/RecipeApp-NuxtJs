import {type AdminMenuModel} from '../../../types/admin/adminMenuModel'

export const AdminMenuService ={
    getMenuList(): AdminMenuModel[] {
        const menu: AdminMenuModel[] = [{
            label: "Dashboard",
            to: "/admin/dashboard",
            active: true
        },
        {
            label: "Inbox",
            to: "/admin/Inbox",
            active: false
        }
            , {
            label: "Products",
            to: "/admin/Products",
            active: false
        },
        // {
        //     label: "Projects",
        //     to: ""
        // },
        // {
        //     label: "Contact Us",
        //     to: ""
        // }
    ]
    return menu
    },
}