import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface TechniqButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    variant?: "default" | "outline" | "secondary" | "ghost";
    className?: string;
}

export function GetStartedButton({
    className,
    children,
    variant = "default",
    ...props
}: TechniqButtonProps) {
    const isOutline = variant === "outline";
    
    return (
        <Button
            style={{ 
              paddingLeft: '64px', 
              paddingRight: '64px', 
              height: '52px',
              minWidth: 'fit-content'
            }}
            className={cn(
                "relative overflow-hidden rounded-md transition-all duration-300 border-none inline-flex items-center justify-center",
                "hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]",
                isOutline ? "bg-white border border-black/10" : "bg-[#C84B2A] hover:bg-[#A63F24]",
                className
            )}
            {...props}
        >
            {/* Content Container (Centered) */}
            <div className="relative z-10 flex items-center justify-center">
                <span className={cn(
                  "font-heading uppercase tracking-wider text-[13px] font-bold whitespace-nowrap",
                  isOutline ? "text-black" : "text-white"
                )}>
                  {children || "Explore Components"}
                </span>
            </div>

            {/* Icon (Absolute Right) */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
                <ArrowUpRight className={cn(
                  "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1",
                  isOutline ? "text-[#C84B2A]" : "text-white/90"
                )} />
            </div>
        </Button>
    );
}

export { GetStartedButton }
