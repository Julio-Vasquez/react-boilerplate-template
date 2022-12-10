import { Button, Input } from 'antd'
import { useState, useRef } from 'react'
import Highlighter from 'react-highlight-words'
import { DeleteOutlined, SearchOutlined } from '@ant-design/icons'

import useIntl from '../../hooks/useIntl'

const useColumnSearch = ({ dataIndex, title }) => {
    const { formatMessage } = useIntl()
    const inputRef = useRef(null)
    const [searchText, setSearchText] = useState('')

    const handleSearch = (selectedKeys, confirm) => {
        confirm()
        setSearchText(selectedKeys[0])
    }

    const handleReset = (clearFilters, confirm) => {
        setSearchText('')
        clearFilters()
        confirm()
    }

    return {
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={inputRef}
                    placeholder={`Search by ${title}`}
                    value={selectedKeys[0]}
                    onChange={e =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() => handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type='primary'
                    onClick={() => handleSearch(selectedKeys, confirm)}
                    size='small'
                    style={{ width: 90, marginRight: 8 }}
                >
                    <SearchOutlined />
                    {formatMessage({ id: 'button.search' })}
                </Button>
                <Button
                    onClick={() =>
                        clearFilters && handleReset(clearFilters, confirm)
                    }
                    size='small'
                    style={{ width: 90 }}
                >
                    <DeleteOutlined />
                    {formatMessage({ id: 'button.clean' })}
                </Button>
            </div>
        ),
        filterIcon: filtered => (
            <SearchOutlined
                style={{ color: filtered ? 'var(--primary)' : undefined }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                ?.toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) setTimeout(() => inputRef?.current?.focus(), 100)
        },
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[searchText]}
                autoEscape
                textToHighlight={text ? text.toString() : ''}
            />
        ),
    }
}

const getTableConfig = ({ recordKey, scrollX = 'max-content', pagSize }) => {
    let rowKey = record => record?._id
    const pagination = pagSize
        ? { pagination: { pageSize: pagSize } }
        : { pagination: false }
    if (recordKey) rowKey = record => record[recordKey]
    const scroll = { x: scrollX }
    return { scroll, rowKey, ...pagination }
}

const filterColumn = ({ key, filters, defaultFilteredValue }) => ({
    filters,
    defaultFilteredValue,
    onFilter: (value, record) => record[key] === value,
})

const sorterColumn = ({ isDate = false, tag, subTag = undefined }) => {
    const sort = (a, b) => {
        a = typeof a === 'string' ? a.toLowerCase() : a
        b = typeof b === 'string' ? b.toLowerCase() : b
        return a < b ? -1 : b < a ? 1 : 0
    }

    if (isDate) {
        const parser = d => new Date(d).getTime()
        const date = (a, b) =>
            subTag
                ? sort(parser(a[tag][subTag]), parser(b[tag][subTag]))
                : sort(parser(a[tag]), parser(b[tag]))
        return { sorter: date }
    }

    const def = (a, b) =>
        subTag ? sort(a[tag][subTag], b[tag][subTag]) : sort(a[tag], b[tag])

    return { sorter: def }
}

export { useColumnSearch, getTableConfig, filterColumn, sorterColumn }
