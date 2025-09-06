"use client";
import { Header } from "@/components/header";
import { Sheet } from "@/components/sheet";
import { SheetContext } from "@/context/sheet-context";
import { useContext } from "react";

export default function ClientLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { status } = useContext(SheetContext);
	return (
		<>
			<main className={`h-[95vh] ${status ? `overflow-hidden` : null}`}>
				{status ? <Sheet /> : null}

				<Header />
				{children}
			</main>
		</>
	);
}
