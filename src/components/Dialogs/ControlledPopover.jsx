import { Popover } from 'antd'
import propTypes from 'prop-types'
import { cloneElement } from 'react'

const ControlledPopover = ({
    visibleState,
    children,
    destroyOnClose,
    title,
    content,
    placement,
    inheritCloseToChildren,
}) => {
    const newPlacement = placement
    const { visible, closeDialog } = visibleState

    const newContent = inheritCloseToChildren
        ? cloneElement(content || <></>, { closeDialog })
        : content

    const onVisibleChange = currVisible => !currVisible && closeDialog()

    return (
        <Popover
            open={visible}
            content={newContent}
            title={title}
            destroyTooltipOnHide={destroyOnClose}
            onOpenChange={onVisibleChange}
            placement={newPlacement}
            trigger='click'
        >
            {children}
        </Popover>
    )
}

ControlledPopover.propTypes = {
    visibleState: propTypes.shape({
        visible: propTypes.bool.isRequired,
        closeDialog: propTypes.func.isRequired,
        openDialog: propTypes.func,
    }).isRequired,
    children: propTypes.element.isRequired,
    destroyOnClose: propTypes.bool.isRequired,
    title: propTypes.string.isRequired,
    content: propTypes.any.isRequired,
    inheritCloseToChildren: propTypes.bool.isRequired,
    placement: propTypes.oneOf([
        'top',
        'left',
        'right',
        'bottom',
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight',
        'leftTop',
        'leftBottom',
        'rightTop',
        'rightBottom',
    ]).isRequired,
}

ControlledPopover.defaultProps = {
    inheritCloseToChildren: true,
    destroyOnClose: true,
    children: undefined,
    placement: 'leftTop',
}

export default ControlledPopover
