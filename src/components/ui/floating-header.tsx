'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuIcon, XIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function FloatingHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{ label: 'Our Systems', href: '#services' },
		{ label: 'Engineering', href: '#features' },
		{ label: 'Compliance', href: '#certifications' },
	];

	return (
		<header
			className={cn(
				'sticky top-5 z-[100] mx-auto w-[calc(100%-2rem)] max-w-5xl transition-all duration-300 ease-out',
				'rounded-xl border border-black/5 shadow-xl bg-white/95 backdrop-blur-lg'
			)}
		>
			<nav className="flex h-14 items-center justify-between px-4">
				{/* Logo */}
				<Link href="/" className="flex items-center flex-shrink-0 mr-4">
					<Image 
						src="/logo.svg" 
						alt="Technik Spirits" 
						width={130} 
						height={30} 
						className="object-contain"
						priority
					/>
				</Link>

				{/* Desktop Nav - Flex 1 to allow spacing */}
				<div className="hidden flex-1 items-center justify-between md:flex ml-8">
					<div className="flex items-center gap-6">
						{links.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-black/60 hover:text-black transition-colors whitespace-nowrap"
							>
								{link.label}
							</Link>
						))}
					</div>
					
					<div className="flex items-center gap-3">
						<Link 
							href="#contact" 
							className={cn(
								buttonVariants({ variant: 'outline', size: 'sm' }),
								'font-mono text-[9px] uppercase tracking-wider h-8 px-4 whitespace-nowrap'
							)}
						>
							DISCUSS PROJECT
						</Link>
						<Link 
							href="#contact" 
							className={cn(
								buttonVariants({ size: 'sm' }),
								'font-mono text-[9px] uppercase tracking-wider h-8 px-4 bg-[#C84B2A] text-white hover:bg-[#A33D22] border-none whitespace-nowrap'
							)}
						>
							START
						</Link>
					</div>
				</div>

				{/* Mobile Menu Toggle */}
				<div className="flex items-center gap-2 md:hidden">
					<Button
						size="icon"
						variant="ghost"
						onClick={() => setOpen(true)}
						className="size-10"
					>
						<MenuIcon className="size-5" />
					</Button>
				</div>

				{/* Sheet Overlay (Mobile) */}
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetContent
						className="bg-white/98 backdrop-blur-xl border-l-0 w-full sm:max-w-sm p-0"
						showClose={false}
						side="left"
					>
						<div className="flex flex-col h-full">
							<div className="flex items-center justify-between p-6 border-b border-black/5">
								<Image src="/logo.svg" alt="Logo" width={120} height={28} />
								<Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
									<XIcon className="size-5" />
								</Button>
							</div>
							
							<div className="flex flex-col gap-1 p-6 overflow-y-auto">
								{links.map((link) => (
									<Link
										key={link.label}
										href={link.href}
										onClick={() => setOpen(false)}
										className="flex items-center h-14 font-mono text-lg uppercase tracking-widest text-black border-b border-black/5"
									>
										{link.label}
									</Link>
								))}
							</div>

							<div className="mt-auto p-8 flex flex-col gap-4 bg-black/[0.02]">
								<Link 
									href="#contact" 
									onClick={() => setOpen(false)}
									className={cn(buttonVariants({ variant: 'outline' }), 'w-full py-6 font-mono text-sm')}
								>
									DISCUSS PROJECT
								</Link>
								<Link 
									href="#contact" 
									onClick={() => setOpen(false)}
									className={cn(buttonVariants(), 'w-full py-6 font-mono text-sm bg-[#C84B2A] text-white')}
								>
									GET STARTED
								</Link>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			</nav>
		</header>
	);
}
