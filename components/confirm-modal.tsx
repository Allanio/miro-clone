"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import React from "react";
import { handler } from "tailwindcss-animate";
import { Simulate } from "react-dom/test-utils";
import abort = Simulate.abort;

interface ConfirmModalProps {
    children: React.ReactNode
    onConfirm: () => void
    disabled?: boolean
    header: string
    description?: string
}

export const ConfirmModal = ({
                                 children,
                                 onConfirm,
                                 disabled,
                                 header,
                                 description
                             }: ConfirmModalProps) => {
    const handleConfirm = () => {
        onConfirm()
    }

    return (

        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {header}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        disabled={disabled}
                        onClick={handleConfirm}
                    >
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )

}