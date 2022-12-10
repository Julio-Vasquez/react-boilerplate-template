import { Drawer } from 'antd'
import propTypes from 'prop-types'
import { cloneElement } from 'react'

const ControlledDrawer = ({
    visibleState,
    children,
    placement,
    width,
    destroyOnClose,
}) => {
    const newPlacement = placement
    const { visible, closeDialog } = visibleState

    const newChildren = cloneElement(children || <></>, {
        closeDialog,
    })

    return (
        <Drawer
            open={visible}
            destroyOnClose={destroyOnClose}
            onClose={closeDialog}
            width={width}
            placement={newPlacement}
        >
            {newChildren}
        </Drawer>
    )
}

ControlledDrawer.propTypes = {
    visibleState: propTypes.shape({
        visible: propTypes.bool.isRequired,
        closeDialog: propTypes.func.isRequired,
        openDialog: propTypes.func,
    }).isRequired,
    placement: propTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
    children: propTypes.element.isRequired,
    width: propTypes.number.isRequired,
    destroyOnClose: propTypes.bool.isRequired,
}

ControlledDrawer.defaultProps = {
    width: 450,
    destroyOnClose: true,
    placement: 'right',
}

export default ControlledDrawer
