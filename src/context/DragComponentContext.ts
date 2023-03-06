import { createContext } from 'react'
import { DragComponent } from '../encapsulator'

interface DragComponentContextValue {
	currentDragComponent: DragComponent | null

	setCurrentDragComponent(newDragComponent: DragComponent | null): void

	selectDragComponent(dragComponent: DragComponent | null): void
}

export const dragComponentContextValue: DragComponentContextValue = {
	currentDragComponent: null,
	setCurrentDragComponent(newDragComponent: DragComponent | null) {},
	selectDragComponent(dragComponent: DragComponent | null) {},
}

export const DragComponentContext = createContext<DragComponentContextValue>(dragComponentContextValue)
