import { Modal } from 'antd'
import propTypes from 'prop-types'
import { cloneElement } from 'react'

const ControlledModal = ({
    visibleState,
    children,
    destroyOnClose,
    width,
    centered,
    title,
    footer,
    inheritCloseToChildren,
}) => {
    const { visible, closeDialog } = visibleState

    const newChildren = inheritCloseToChildren
        ? cloneElement(children || <></>, { closeDialog })
        : children

    return (
        <Modal
            open={visible}
            onCancel={closeDialog}
            destroyOnClose={destroyOnClose}
            centered={centered}
            title={title}
            width={width}
            footer={footer}
        >
            {newChildren}
        </Modal>
    )
}

ControlledModal.propTypes = {
    visibleState: propTypes.shape({
        visible: propTypes.bool.isRequired,
        closeDialog: propTypes.func.isRequired,
        openDialog: propTypes.func,
    }).isRequired,
    children: propTypes.element.isRequired,
    destroyOnClose: propTypes.bool.isRequired,
    width: propTypes.number.isRequired,
    centered: propTypes.bool.isRequired,
    title: propTypes.string.isRequired,
    footer: propTypes.element.isRequired,
    inheritCloseToChildren: propTypes.bool.isRequired,
}

ControlledModal.defaultProps = {
    centered: true,
    width: 420,
    footer: undefined,
    inheritCloseToChildren: true,
    destroyOnClose: true,
}

export default ControlledModal
