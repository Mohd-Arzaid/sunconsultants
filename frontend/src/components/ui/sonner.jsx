import { Toaster as Sonner } from "sonner"

const Toaster = ({
  ...props
}) => {
  // Simple theme detection without next-themes
  const theme = "system"

  return (
    (<Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg font-geost rounded-xl border-2",
          description: "group-[.toast]:text-muted-foreground font-geost text-base",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-geost rounded-lg px-4 py-2 hover:opacity-90 transition-all",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-geost rounded-lg px-4 py-2 hover:opacity-90 transition-all",
          title: "font-geost text-lg font-semibold",
          icon: "text-primary",
          closeButton: "text-muted-foreground hover:text-foreground transition-colors",
        },
        style: {
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        },
      }}
      {...props} />)
  );
}

export { Toaster }
