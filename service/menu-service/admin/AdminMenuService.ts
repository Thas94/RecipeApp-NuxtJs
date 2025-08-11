import {type AdminMenuModel} from '../../../types/admin/adminMenuModel'

export const AdminMenuService ={
    getMenuList(): AdminMenuModel[] {
        const menu: AdminMenuModel[] = [{
            label: "Dashboard",
            to: "/admin/dashboard",
            active: true,
            icon: "pi pi-home"
        },
        {
            label: "Inbox",
            to: "/admin/Inbox",
            active: false,
            icon: "pi pi-inbox"
        }
            , {
            label: "Products",
            to: "/admin/Products",
            active: false,
            icon: "pi pi-barcode"
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