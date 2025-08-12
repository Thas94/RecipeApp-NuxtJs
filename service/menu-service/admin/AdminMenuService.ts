import {type AdminNavigationMenuModel, type AdminDashboardModel} from '../../../types/admin/adminMenuModel'

export const AdminMenuService ={
    getNavigationMenuList(): AdminNavigationMenuModel[] {
        const menu: AdminNavigationMenuModel[] = [{
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
    getDashboardItems(): AdminDashboardModel {
        const items: AdminDashboardModel = {
            viewsLabel: "Total Views",
            viewsTotal: "246K",
            viewsRating: "13.8%",
            viewsIcon: "pi pi-arrow-down",
            viewsTextIconColor: "text-red-500",
            viewsGraphColor: "bg-blue-300",
            productsLabel: "Products Sold",
            productsTotal: "2453",
            productsRating: "13.8%",
            productsIcon: "pi pi-arrow-up",
            productsTextIconColor: "text-green-500",
            productsGraphColor: "bg-purple-300",
            earningsLabel: "Total Earnings",
            earningstotal: "R39K",
            earningsRating: "13.8%",
            earningsIcon: "pi pi-arrow-down",
            earningsTextIconColor: "text-red-500",
            earningsGraphColor: "bg-green-300"
        }
        return items
    }
}