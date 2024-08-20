import { createColumnHelper } from "@tanstack/table-core";
import { TableBuilder } from "../TableBuilder";

interface StoryData {
    id: number;
    name: string;
    text: string;
}

const helper = createColumnHelper<StoryData>();

export const args = {
    columns: [
        helper.display({
            id: 'select',
            header: ({ table }) => (
                <TableBuilder.TableSelectionHeaderCheckbox table={table} />
            ),
            cell: ({ row }) => <TableBuilder.TableSelectionCellCheckbox row={row} />,
            size: 60,
        }),
        helper.accessor('id', {}),
        helper.accessor('name', {}),
        helper.accessor('text', {}),
    ],
    data: [
        {
            id: 1,
            name: 'Danil',
            text: 'Some long text Some \n long text Some long te\n   xt Some long text ',
        },
        {
            id: 3,
            name: 'Sam',
            text: 'Some long text Some long text Some long text Some long text ',
        },
        {
            id: 4,
            name: 'John',
            text: 'Some long text Some long text Some long text Some long text ',
        },
        {
            id: 5,
            name: 'David',
            text: 'Some long text Some long text Some long text Some long text ',
        },
        {
            id: 6,
            name: 'Mark',
            text: 'XYZ',
        },
        {
            id: 7,
            name: 'Ilon',
            text: 'Some long text Some long text Some long text Some long text Some long text Some long text Some long text Some long textSome long text Some long text Some long text Some long text',
        },
    ],
}