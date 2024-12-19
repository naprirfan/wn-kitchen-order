export interface IOrderPayload {
    orderPayload?: ITableOrder[];
    setOrderPayload?: React.Dispatch<any>;
    applicationState?: ITableOrder;
    setApplicationState?: React.Dispatch<any>;
}

export interface ITableOrder {
    table: number;
    itemList: IOrderItemPayload[];
}

export interface IOrderItemPayload extends IOrderItem {
    quantity: number;
    dateTime: Date;
    status: IOrderStatus;
    notes: string;
    uid: string;
}

export interface IOrderItem {
    id: number;
    name: string;
    categoryId?: number;
    categoryName?: string;
}

export type IOrderStatus =
    'ORDER_PLACED' |
    'ORDER_IN_PROGRESS' |
    'ORDER_COMPLETED';