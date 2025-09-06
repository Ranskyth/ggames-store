"use client";
import { createContext, ReactNode, useState } from "react";

export const SheetContext = createContext(
	{} as { OpenSheet: () => void; CloseSheet: () => void; status: boolean },
);

export const SheetProvider = ({ children }: { children: ReactNode }) => {
	const [status, setStatus] = useState(false);
	const OpenSheet = () => {
		setStatus(true);
	};
	const CloseSheet = () => {
		setStatus(false);
	};
	return (
		<SheetContext.Provider value={{ OpenSheet, CloseSheet, status }}>
			{children}
		</SheetContext.Provider>
	);
};
