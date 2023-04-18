import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import styles from "../styles/styles.module.css"

const ViewImage = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className={styles.Button}>Edit profile</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.DialogOverlay} />
                <Dialog.Content className={styles.DialogContent}>
                    <Dialog.Title className={styles.DialogTitle}>Edit profile</Dialog.Title>
                    <Dialog.Description className={styles.DialogDescription}>
                        Make changes to your profile here. Click save when you are done.
                    </Dialog.Description>
                    <Dialog.Close asChild>
                        fecha
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default ViewImage
