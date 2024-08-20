import { useMemo, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
    createColumnHelper,
    PaginationState,
    RowSelectionState,
} from '@tanstack/react-table';
import { TableBuilder } from './index';
import { TableBuilderProps } from './TableBuilder.types';
import './TableBuilderStoryStyles.scss';

interface StoryData {
    id: number;
    name: string;
    text: string;
}

const helper = createColumnHelper<StoryData>();

const meta: Meta<TableBuilderProps<any>> = {
    component: TableBuilder,
    tags: ['autodocs'],
    parameters: {
        docs: {
            type: 'code',
        },
    },
    argTypes: {},
    args: {
        isLoading: false,
        error: null,
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
    },
};

export default meta;

type Story = StoryObj<typeof TableBuilder<StoryData>>;

export const Default: Story = {
    args: {
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
    },
    render: args => <RenderComponent {...args} />,
};

const RenderComponent = (args: TableBuilderProps<StoryData>) => {
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
    const [error, setError] = useState<string | null>(null);
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 20,
    });

    // setTimeout(() => setError('КАКАЯ-ТО ОШИБКА'), 3000);

    const rowSelectionLength = useMemo(() => {
        return Object.keys(rowSelection).length;
    }, [rowSelection]);

    return (
        <>
            <TableBuilder.TableSearchButton
                disabled={!!rowSelectionLength}
                onClick={() => alert('Вызов API')}
            />
            <TableBuilder
                {...args}
                error={error}
                rowSelection={rowSelection}
                setRowSelection={setRowSelection}
                pagination={pagination}
                setPagination={setPagination}
                rowHandleClick={() => console.log('table click')}
                tableComponent={
                    {
                        // tfooterBlock: (
                        //     <div className={'tfooter-test'}>
                        //         <div>Всего записей {rowSelectionLength}</div>
                        //         <TableBuilder.TablePaginationControl
                        //             pagination={pagination}
                        //             setPagination={setPagination}
                        //         />
                        //     </div>
                        // ),
                    }
                }
                tableClassNames={{
                    theadClassName: {
                        thead: 'thead-test',
                    },
                }}
            />
        </>
    );
};

export const WithError: Story = {
    args: {
        ...Default.args,
        error: 'ALERT. ERROR!',
    },
};
