type Props = {
    children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
    return (
        <div className="md-container" style={{ paddingBottom: '32px' }}>
            <div>
                {children}
            </div>
        </div>
    );
}