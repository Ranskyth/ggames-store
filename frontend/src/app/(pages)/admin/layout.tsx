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
				<div className="bg-[#222222] mt-18 m-2 p-5 rounded-2xl flex-1">
					{children}
				</div>
			</main>
		</>
	);
}
