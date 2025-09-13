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
			<main className={`h-[100vh] ${status ? `overflow-hidden` : null} overflow-x-hidden w-full relative`}>
				<Sheet />
				<Header />
				{children}
			</main>
		</>
	);
}
