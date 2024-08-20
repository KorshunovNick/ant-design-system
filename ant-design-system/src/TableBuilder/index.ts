import { TableBuilder as TableComponent } from './TableBuilder';
import { TableSelectionHeaderCheckbox } from './content/TableSelectionHeaderCheckbox/TableSelectionHeaderCheckbox';
import { TableSelectionCellCheckbox } from './content/TableSelectionCellCheckbox/TableSelectionCellCheckbox';
import { TablePaginationControl } from './content/TablePaginationControl/TablePaginationControl';
import { TableSearchButton } from './content/TableSearchButton/TableSearchButton';
import { TableSearch } from './content/TableSearch/TableSearch';

export const TableBuilder = Object.assign(TableComponent, {
    TableSelectionHeaderCheckbox,
    TableSelectionCellCheckbox,
    TablePaginationControl,
    TableSearchButton,
    TableSearch,
});
