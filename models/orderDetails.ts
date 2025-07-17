export interface OrderDetails {
    orderId : number
    orderStatus: string
    createdDate: string
    orderDetailsObj: OrderDetail[]
}

export interface OrderDetail {
    id: number
    name: string
    img: string
    price: string
}