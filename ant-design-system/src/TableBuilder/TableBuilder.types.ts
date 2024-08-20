import {
    ColumnDef,
    PaginationState,
    Row,
    RowSelectionState,
    Updater,
} from '@tanstack/react-table';
import { RowData } from '@tanstack/table-core/src/types';

export type TableBuilderProps<T extends RowData> = TableConstructor &
    BasicTableProps<T> &
    TableControllerProps<T> &
    TableClassNames &
    SelectionTableProps &
    PaginationTableProps;

interface BasicTableProps<T extends RowData> {
    data: T[];
    columns: ColumnDef<T, any>[];
}

interface TableControllerProps<T extends RowData> {
    rowHandleClick?: (row: Row<T>) => void;
    rowHandleDoubleClick?: (row: Row<T>) => void;
    isLoading?: boolean;
    error?: string | null;
}
export interface TableConstructor {
    tableComponent?: TableContainerComponent;
}

export interface TableContainerComponent {
    theadBlock?: React.ReactNode;
    tfooterBlock?: React.ReactNode;
}

/**Классы для таблицы (можно добавлять и использовать) */
export interface TableClassNames {
    tableClassNames?: {
        tableClassName?: string;
        theadClassName?: THeadClassName;
        tbodyClassName?: TBodyClassName;
    };
}

interface SelectionTableProps {
    rowSelection?: RowSelectionState;
    setRowSelection?: (rowSelection: Updater<RowSelectionState>) => void;
}

interface PaginationTableProps {
    pagination?: PaginationState;
    setPagination?: (pagination: Updater<PaginationState>) => void;
}

export interface THeadClassName {
    thead?: string;
    tr?: string;
    th?: string;
    thWrapper?: string;
}

export interface TBodyClassName {
    tbody?: string;
    tr?: string;
    td?: string;
}

export interface TPaginationClassNames {
    root?: string;
    rowSelector?: {
        root?: string;
        text?: string;
        selectContainer?: RowInPageSelect;
    };
    pageSelector?: {
        root?: string;
        text?: string;
        leftBtn?: string;
        rightBtn?: string;
    };
}

export interface RowInPageSelect {
    select: {
        root?: string;
        text?: string;
        icon?: string;
    };
    dropdown: {
        root?: string;
        item?: string;
    };
}
