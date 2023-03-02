import { createContext } from 'react'
import { DragComponent } from '../encapsulator'

interface DragComponentContextValue {
	currentDragComponent: DragComponent | null

	setCurrentDragComponent(newDragComponent: DragComponent | null): void
}

export const dragComponentContextValue: DragComponentContextValue = {
	currentDragComponent: null,
	setCurrentDragComponent() {},
}

export const DragComponentContext = createContext<DragComponentContextValue>(dragComponentContextValue)
