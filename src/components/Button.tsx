type ButtonProps = {
    children: React.ReactNode,
    variant: 'primary' | 'secondary' | 'special',
    className?: string,
} & React.ComponentPropsWithoutRef<"button">

export default function Button({ children, variant, className, ...rest}: ButtonProps) {
    const base: string = 'text-white font-poppins px-7 py-2 rounded-full shadow-lg hover:cursor-pointer hover:scale-95 transition-all duration-300'
    const variants = {
        primary: "bg-[#00ADB5]",
        secondary: "bg-[#393E46BF]",
        special: "backdrop-blur-md bg-[#393E4680]"
    }
  return (
    <button {...rest} className={`${base} ${variants[variant]} ${className}`}>
        {children}
    </button>
  );
}