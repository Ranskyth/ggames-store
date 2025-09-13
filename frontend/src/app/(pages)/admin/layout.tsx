"use client";

import { SidebarAdmin } from "@/components/sidebarAdmin";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<main className="flex">
				<SidebarAdmin/>
				<div className="bg-[#fff] rounded-2xl flex-1">
					{children}
				</div>
			</main>
		</>
	);
}
