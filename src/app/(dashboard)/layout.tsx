export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='h-screen flex'>
            {/* LEFT */}
            <div className="w-[20%] bg-primary">l</div>
            {/* RIGHT */}
            <div className="w-[80%] bg-secondary">r</div>
        </div>
    );
}
